import { createContext, useContext } from 'react';

const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  return (
    <WishlistContext.Provider value={{ test: 'success for wish' }}>
      {children}
    </WishlistContext.Provider>
  );
}


export function useWishlist() {
  return useContext(WishlistContext)
}