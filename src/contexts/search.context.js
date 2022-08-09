import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchStr, setSearchStr] = useState('');

  const searchProducts = (products) =>
    products.length > 0
      ? products.filter(
          (product) =>
            product.name.toLowerCase().includes(searchStr.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchStr.toLowerCase())
        )
      : products;

  return (
    <SearchContext.Provider value={{ searchStr, setSearchStr, searchProducts }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
