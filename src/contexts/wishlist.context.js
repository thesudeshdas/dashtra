import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { useAuth } from './auth.context';

const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const {
    state: { signInStatus, userId },
  } = useAuth();

  const initialState = {
    owner: '',
    wishlist: [],
  };

  const wishlistReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INITIAL_DATA_FROM_SERVER':
        return {
          ...state,
          owner: action.payload.wishlist.owner,
          wishlist: action.payload.wishlist.productsList,
        };

      case 'ADD_PRODUCT_TO_SERVER':
        return {
          ...state,
          wishlist: [
            ...state.wishlist.filter(
              (item) => item.product._id !== action.payload._id
            ),
            { product: action.payload.product },
          ],
        };

      case 'REMOVE_PRODUCT_FROM_CART':
        return {
          ...state,
          wishlist: state.wishlist.filter(
            (item) => item.product._id !== action.payload.product._id
          ),
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addProductInServer = async (product) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}wishlist/${userId}/add`,
        {
          productId: product._id,
        }
      );

      if (response.status === 200) {
        dispatch({ type: 'ADD_PRODUCT_TO_SERVER', payload: { product } });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const removeProductFromServer = async (product) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}wishlist/${userId}/remove`,
        {
          productId: product._id,
        }
      );

      if (response.status === 200) {
        dispatch({ type: 'REMOVE_PRODUCT_FROM_CART', payload: { product } });
      }

      console.log({ response });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_URL}wishlist/${userId}`
          );

          if (response.status === 200) {
            dispatch({
              type: 'FETCH_INITIAL_DATA_FROM_SERVER',
              payload: response.data,
            });
          }
        }
      } catch (error) {
        console.log({ error });
      }
    })();
  }, [signInStatus, userId]);

  return (
    <WishlistContext.Provider
      value={{ state, dispatch, addProductInServer, removeProductFromServer }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
