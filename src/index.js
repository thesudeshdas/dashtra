import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './contexts/products.context';
import CartProvider from './contexts/cart.context';
import AuthProvider from './contexts/auth.context';
import WishlistProvider from './contexts/wishlist.context';
import ModalProvider from './contexts/modal.context';
import SearchProvider from './contexts/search.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <ProductsProvider>
            <CartProvider>
              <WishlistProvider>
                <ModalProvider>
                  <App />
                </ModalProvider>
              </WishlistProvider>
            </CartProvider>
          </ProductsProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
