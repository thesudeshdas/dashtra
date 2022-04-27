import './navigation-top.css';

import { Link } from 'react-router-dom';
import { MiHeart, MiSearch, MiShoppingCart, MiUser } from '../../assets/icons';

export default function NavigationTop() {
  return (
    <nav className='nav-top flex-align-center'>
      <Link to='/'>
        <img src='/dash-logo.svg' alt='brand' className='margin-right-md' />
      </Link>

      <ul className='nav-top-categories flex-row'>
        <li className='margin-horizontal-md'>
          <a href='/products'>Football</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products'>Accessories</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products'>Clothing</a>
        </li>
        <li className='margin-horizontal-md'>
          <a href='/products'>Fitness</a>
        </li>
      </ul>
      <form className='nav-top-search-bar flex-row flex-align-center margin-right-md'>
        <MiSearch className='nav-top-search-bar__icon margin-left-sm' />
        <input
          type='search'
          placeholder='Search for products, brands and more'
          className='padding-sm'
        />
      </form>
      <ul className='flex-row'>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/login' className='grid-center'>
            <MiUser className='nav-top-icon' />
          </Link>
        </li>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/profile' className='grid-center'>
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
