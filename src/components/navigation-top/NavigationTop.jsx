import './navigation-top.css';

import { Link } from 'react-router-dom';
import { MiHeart, MiSearch, MiShoppingCart, MiUser } from '../../assets/icons';
import SearchBar from '../search-bar/SearchBar';

export default function NavigationTop() {
  return (
    <nav className='nav-top flex-align-center'>
      <Link to='/'>
        <img src='/dash-logo.svg' alt='brand' className='margin-right-md' />
      </Link>

      <ul className='nav-top-categories flex-row'>
        <li className='margin-horizontal-md'>
          <a href='/products/?category=football'>Football</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products/?category=accessories'>Accessories</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products/?category=clothing'>Clothing</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products/?category=fitness'>Fitness</a>
        </li>
      </ul>

      <SearchBar />

      <ul className='flex-row'>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/login' className='grid-center'>
            <MiUser className='nav-top-icon' />
          </Link>
        </li>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/wishlist' className='grid-center'>
            <MiHeart className='nav-top-icon' />
          </Link>
        </li>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/cart' className='grid-center'>
            <MiShoppingCart className='nav-top-icon' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
