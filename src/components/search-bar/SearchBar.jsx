import { useLocation, useNavigate } from 'react-router-dom';
import { MiSearch } from '../../assets/icons';
import { useSearch } from '../../contexts/search.context';
import './SearchBar.css';

export default function SearchBar() {
  const { setSearchStr } = useSearch();

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (location.pathname !== '/products') {
      navigate('/products', { replace: true });
    }

    setSearchStr(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='nav-top-search-bar flex-row flex-align-center margin-right-md'
    >
      <MiSearch className='nav-top-search-bar__icon margin-left-sm' />
      <input
        type='search'
        placeholder='Search for products, brands and more'
        onChange={handleChange}
        className='padding-sm'
      />
    </form>
  );
}
