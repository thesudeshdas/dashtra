import { useProducts } from '../../contexts/products.context';
import { optionsFilterData } from '../../data/optionsFilter.data';
import './filter.css';

export default function Filter({ handleFilters }) {
  const {
    state: { productsList },
  } = useProducts();

  const minPrice =
    productsList.length > 0
      ? Math.min(...productsList.map((product) => product.price.discounted))
      : 0;

  const maxPrice =
    productsList.length > 0
      ? Math.max(...productsList.map((product) => product.price.discounted))
      : 100000;

  const handleCategories = (e) => {
    handleFilters((prevOptions) => ({
      ...prevOptions,
      categories: e.target.value,
    }));
  };

  const handleBrands = (e) => {
    handleFilters((prevOptions) => ({
      ...prevOptions,
      brands: e.target.checked
        ? prevOptions.brands.concat(e.target.value)
        : prevOptions.brands.filter((item) => item !== e.target.value),
    }));
  };

  const handleRatings = (e) => {
    handleFilters((prevOptions) => ({
      ...prevOptions,
      rating: e.target.value,
    }));
  };

  const handlePrice = (e) => {
    handleFilters((prevOptions) => ({ ...prevOptions, price: e.target.value }));
  };

  return (
    <aside className='filter padding-md'>
      <div>Home/Football</div>
      <h2 className='margin-top-md font-size-md font-weight-600'>FILTERS</h2>

      {/* //TODO - Put HR later 
      <hr className='hr-filter margin-vertical-md' /> */}

      <ul>
        {optionsFilterData.filters
          .find((item) => item.category === 'Categories')
          .options.map((option) => (
            <li key={option}>
              <input
                name='category'
                type='radio'
                id={option}
                value={option}
                onChange={handleCategories}
              />
              <label htmlFor={option}> {option}</label>
            </li>
          ))}
      </ul>

      <h2 className='margin-top-md font-size-md font-weight-600'>BRANDS</h2>
      <ul>
        {optionsFilterData.filters
          .find((item) => item.category === 'Brands')
          .options.map((option) => (
            <li key={option}>
              <input
                type='checkbox'
                id={option}
                value={option}
                onChange={handleBrands}
              />
              <label htmlFor={option}> {option}</label>
            </li>
          ))}
      </ul>

      <h2 className='margin-top-md font-size-md font-weight-600'>PRICE</h2>

      <input
        type='range'
        min={minPrice}
        max={maxPrice}
        defaultValue={maxPrice}
        onChange={handlePrice}
      />
      <div className='flex-justify-space-between'>
        <label className='font-size-sm'>Min: ₹ {minPrice}</label>
        <label className='font-size-sm'>Max: ₹ {maxPrice}</label>
      </div>

      <h2 className='margin-top-md font-size-md font-weight-600'>Ratings</h2>
      <ul>
        {optionsFilterData.filters
          .find((item) => item.category === 'Ratings')
          .options.map((option) => (
            <li key={option}>
              <input
                name='rating'
                type='radio'
                id={option}
                value={option}
                onChange={handleRatings}
              />
              <label htmlFor={option}> {option} & above</label>
            </li>
          ))}
      </ul>

      {/* <h2 className='margin-top-md font-size-md font-weight-600'>COLOR</h2>
      <ul>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> Black
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> Red
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> White
          </label>
        </li>
      </ul> */}
    </aside>
  );
}
