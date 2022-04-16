import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './contexts/products.context';
import CartProvider from './contexts/cart.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
