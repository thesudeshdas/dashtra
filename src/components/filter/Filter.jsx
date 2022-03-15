import './filter.css';

export default function Filter() {
  return (
    <aside className='padding-md'>
      <div>Home/Football</div>
      <h2 className='margin-top-md font-size-md font-weight-600'>FILTERS</h2>

      {/* //TODO - Put HR later 
  <hr className='hr-filter margin-vertical-md' /> */}
      <ul>
        <li>
          <label htmlFor='football'>
            <input type='radio' /> Football
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='radio' /> Clothing
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='radio' /> Fitness
          </label>
        </li>
      </ul>

      <h2 className='margin-top-md font-size-md font-weight-600'>BRANDS</h2>
      <ul>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> Nike
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> Adidas
          </label>
        </li>
        <li>
          <label htmlFor='football'>
            <input type='checkbox' /> Puma
          </label>
        </li>
      </ul>

      <h2 className='margin-top-md font-size-md font-weight-600'>PRICE</h2>
      <input type='range' />

      <h2 className='margin-top-md font-size-md font-weight-600'>COLOR</h2>
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
      </ul>
    </aside>
  );
}
