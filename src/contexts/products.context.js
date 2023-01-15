const { createContext, useContext, useReducer } = require('react');

const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const initialState = {
    total: 0,
    productsList: [],
  };

  const productsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
      case 'INITIAL_FETCH_FROM_SERVER':
        return {
          ...state,
          total: payload.productsList.length,
          productsList: payload.productsList,
        };

      // TODO: later persist the filter
      // case 'FILTER_BRANDS': {
      //   console.log('trying to filter brand persist');

      //   return {
      //     ...state,
      //     filters: {
      //       ...state.filters,
      //       brands: action.payload.brandsList,
      //     },
      //   };
      // }
      
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
