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

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  const addProductInServer = async (product) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/wishlist/${userId}/add`,
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

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `http://localhost:3000/wishlist/${userId}`
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
    <WishlistContext.Provider value={{ state, dispatch, addProductInServer }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
