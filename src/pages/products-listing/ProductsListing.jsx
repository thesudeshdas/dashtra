import axios from 'axios';
import { useEffect, useState } from 'react';
import { CardProduct, Filter, Sort } from '../../components';
import { useProducts } from '../../contexts/products.context';
import { productsData } from '../../data/products.data';
import {
  categoriseProducts,
  filterBrand,
  filterProducts,
} from '../../utils/filter.utils';
import { sortProducts } from '../../utils/sort.utils';
import './products-listing.css';

export default function ProductsListing() {
  const {
    state: { productsList },
    dispatch: productsDispatch,
  } = useProducts();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3000/products');

        response.status === 200 &&
          productsDispatch({
            type: 'INITIAL_FETCH_FROM_SERVER',
            payload: { productsList: response.data.productsList },
          });
      } catch (error) {
        console.log('error whiel fetching');
      }
    })();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    rating: 0,
    brands: [],
    price: 10000,
    categories: '',
    availability: {
      includeOutOfStock: false,
      fastDeliveryOnly: false,
    },
    sortBy: 'relevance',
  });

  const filteredArray = filterProducts(
    productsList,
    selectedOptions.categories,
    selectedOptions.brands,
    selectedOptions.price,
    selectedOptions.rating
  );

  const sortedProducts = sortProducts(filteredArray, selectedOptions.sortBy);

  return (
    <main className='page-products-listing flex-row'>
      <Filter handleFilters={setSelectedOptions} />
      <section className='padding-md'>
        <Sort handleSort={setSelectedOptions} />
        <ul className='products-container'>
          {sortedProducts.length > 0
            ? sortedProducts.map((product) => (
                <li key={product._id}>
                  <CardProduct details={product} />
                </li>
              ))
            : // TODO : This to a be an error message
              'No products, remove some filters'}
        </ul>
      </section>
    </main>
  );
}
