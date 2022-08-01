import { MiSearch } from '../../assets/icons';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <form className='nav-top-search-bar flex-row flex-align-center margin-right-md'>
      <MiSearch className='nav-top-search-bar__icon margin-left-sm' />
      <input
        type='search'
        placeholder='Search for products, brands and more'
        className='padding-sm'
      />
    </form>
  );
}
