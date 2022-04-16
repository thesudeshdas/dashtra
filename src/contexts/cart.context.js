import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

export default function CartProvider({ children }) {
  
  const initialState = {
    owner: "Sudesh",
    total: 0,
    cartList: []
  }
  
  const cartReducer = (state, action) => {}
  
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  
  return (
    <CartContext.Provider value={{state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext)
}