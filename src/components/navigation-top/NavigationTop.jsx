import './navigation-top.css';

import { Link } from 'react-router-dom';
import { MiHeart, MiSearch, MiShoppingCart, MiUser } from '../../assets/icons';

export default function NavigationTop() {
  return (
    <nav className='nav-top flex-align-center'>
      <img src='/dash-logo.svg' alt='brand' className='margin-right-md' />
      <ul className='nav-top-categories flex-row'>
        <li className='margin-horizontal-md'>Football</li>
        <li className='margin-horizontal-md'>Clothing</li>
        <li className='margin-horizontal-md'>Accessories</li>
        <li className='margin-horizontal-md'>Fitness</li>
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
          <Link to='/profile' className='grid-center'>
            <MiUser className='nav-top-icon' />
          </Link>
        </li>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/profile' className='grid-center'>
            <MiHeart className='nav-top-icon' />
          </Link>
        </li>
        <li className='grid-center margin-horizontal-md'>
          <Link to='/profile' className='grid-center'>
            <MiShoppingCart className='nav-top-icon' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
