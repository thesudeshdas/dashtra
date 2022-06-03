import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ProductsProvider from './contexts/products.context';
import CartProvider from './contexts/cart.context';
import AuthProvider from './contexts/auth.context';
import WishlistProvider from './contexts/wishlist.context';
import ModalProvider from './contexts/modal.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AuthProvider>
          <ProductsProvider>
            <CartProvider>
              <WishlistProvider>
                <App />
              </WishlistProvider>
            </CartProvider>
          </ProductsProvider>
        </AuthProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
