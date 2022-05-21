import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { useAuth } from './auth.context';

const CartContext = createContext();

export default function CartProvider({ children }) {
  const {
    state: { signInStatus, userId },
  } = useAuth();

  const initialState = {
    owner: '',
    total: 0,
    cartList: [],
  };

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_INITIAL_DATA_FROM_SERVER':
        return {
          ...state,
          owner: action.payload.cart.owner,
          cartList: action.payload.cart.productsList,
          total: action.payload.cart.total,
        };

      case 'ADD_PRODUCT_TO_SERVER':
        return {
          ...state,
          cartList: [
            ...state.cartList.filter(
              (item) => item.product._id !== action.payload._id
            ),
            { product: action.payload.product, quantity: 1 },
          ],

          total: state.total + action.payload.product.price.discounted,
        };

      case 'REMOVE_PRODUCT_FROM_CART':
        return {
          ...state,
          cartList: [
            ...state.cartList.filter(
              (item) => item.product._id !== action.payload.product._id
            ),
          ],
          total:
            state.total -
            action.payload.product.price.discounted *
              state.cartList.find(
                (item) => item.product._id === action.payload.product._id
              ).quantity,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductInServer = async (product) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/cart/${userId}/add`,
        {
          productId: product._id,
          newTotal: state.total + product.price.discounted,
        }
      );

      if (response.status === 200) {
        console.log('successfully added in server');

        dispatch({
          type: 'ADD_PRODUCT_TO_SERVER',
          payload: { product },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const removeProductFromServer = async (product) => {
    const response = await axios.post(
      `http://localhost:3000/cart/${userId}/remove`,
      {
        productId: product._id,
        newTotal:
          state.total -
          product.price.discounted *
            state.cartList.find((item) => item.product._id === product._id)
              .quantity,
      }
    );

    if (response.status === 200) {
      dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        payload: { product },
      });
    }
  };

  useEffect(() => {
    (async () => {
      try {
        if (userId) {
          const response = await axios.get(
            `http://localhost:3000/cart/${userId}`
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
    <CartContext.Provider
      value={{ state, dispatch, addProductInServer, removeProductFromServer }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
