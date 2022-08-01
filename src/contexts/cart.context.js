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
          cartList: state.cartList.filter(
            (item) => item.product._id !== action.payload.product._id
          ),
          total:
            state.total -
            action.payload.product.price.discounted *
              state.cartList.find(
                (item) => item.product._id === action.payload.product._id
              ).quantity,
        };

      case 'UPDATE_QUANTITY_IN_CART':
        return {
          ...state,
          cartList: [
            ...state.cartList.filter(
              (item) => item.product._id !== action.payload.product._id
            ),
            {
              product: action.payload.product,
              quantity: action.payload.quantity,
            },
          ],
          total: action.payload.total,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProductInServer = async (product) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}cart/${userId}/add`,
        {
          productId: product._id,
          newTotal: state.total + product.price.discounted,
        }
      );

      if (response.status === 200) {
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
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}cart/${userId}/remove`,
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
    } catch (error) {
      console.log({ error });
    }
  };

  const updateQuantityInServer = async (product, quantity) => {
    try {
      const reducer = (acc, cur) =>
        cur.product._id !== product._id
          ? acc + cur.product.price.discounted
          : acc + product.price.discounted * quantity;

      const newTotal = state.cartList.reduce(reducer, 0);

      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}cart/${userId}/update`,
        {
          productId: product._id,
          newQuantity: quantity,
          newTotal: newTotal,
        }
      );

      if (response.status === 200) {
        dispatch({
          type: 'UPDATE_QUANTITY_IN_CART',
          payload: { product, quantity, total: newTotal },
        });
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
            `${process.env.REACT_APP_SERVER_URL}cart/${userId}`
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
      value={{
        state,
        dispatch,
        addProductInServer,
        removeProductFromServer,
        updateQuantityInServer,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
