import { useState } from 'react';
import { MiSearch } from '../../assets/icons';
import { useSearch } from '../../contexts/search.context';
import './SearchBar.css';

export default function SearchBar() {
  const { searchStr, setSearchStr } = useSearch();

  return (
    <form className='nav-top-search-bar flex-row flex-align-center margin-right-md'>
      <MiSearch className='nav-top-search-bar__icon margin-left-sm' />
      <input
        type='search'
        placeholder='Search for products, brands and more'
        onChange={(e) => setSearchStr(e.target.value)}
        className='padding-sm'
      />
    </form>
  );
}
