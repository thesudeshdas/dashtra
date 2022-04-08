import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  Cart,
  Homepage,
  NavFooterPages,
  ProductDetails,
  ProductsListing,
} from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<NavFooterPages />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/products' element={<ProductsListing />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
