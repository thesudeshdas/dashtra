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

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(wishlistReducer, initialState);

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `http://localhost:3000/wishlist/${userId}`
          );

          console.log({ response });

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
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
