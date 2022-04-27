import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Cart,
  Homepage,
  Login,
  NavFooterPages,
  ProductDetails,
  ProductsListing,
} from './pages';
import RequireAuth from './utils/RequireAuth';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<NavFooterPages />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/products' element={<ProductsListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />

          <Route
            path='cart'
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
