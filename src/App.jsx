import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Homepage, NavFooterPages } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<NavFooterPages />}>
          <Route path='home' element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
