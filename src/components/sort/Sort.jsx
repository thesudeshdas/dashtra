import { useState } from 'react';
import './Sort.css';

export default function Sort({ handleSort }) {
  const handleSortBy = (e) =>
    handleSort((prevOptions) => ({
      ...prevOptions,
      sortBy: e.target.value,
    }));

  return (
    <div className='sort margin-bottom-md padding-vertical-sm'>
      <select name='sort' id='sort' onChange={handleSortBy}>
        <option value='relevance'> Relevance</option>
        <option value='price-low-to-high'>Price - Low to High</option>
        <option value='price-high-to-low'>Price - High to Low</option>
      </select>
    </div>
  );
}
