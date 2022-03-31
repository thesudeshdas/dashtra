import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage, NavFooterPages, ProductsListing } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route element={<NavFooterPages />}>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/products' element={<ProductsListing />} />
          <Route
            path='/product/:productId'
            element={<div>This is a single product</div>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
