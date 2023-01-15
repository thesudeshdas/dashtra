import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CardProduct, Filter, Sort } from '../../components';
import { useProducts } from '../../contexts/products.context';
import { useSearch } from '../../contexts/search.context';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import { filterProducts } from '../../utils/filter.utils';
import { sortProducts } from '../../utils/sort.utils';
import './ProductsListing.css';

export default function ProductsListing() {
  const { searchProducts } = useSearch();

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get('category');

  useDocumentTitle('Dashtra | Products');

  const {
    state: { productsList },
    dispatch: productsDispatch,
  } = useProducts();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}products`
        );

        response.status === 200 &&
          productsDispatch({
            type: 'INITIAL_FETCH_FROM_SERVER',
            payload: { productsList: response.data.productsList },
          });
      } catch (error) {
        console.log('error whiel fetching', { error });
      }
    })();
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    rating: 0,
    brands: [],
    price: 15999,
    categories: category,
    availability: {
      includeOutOfStock: false,
      fastDeliveryOnly: false,
    },
    sortBy: 'relevance',
  });

  const searchedProducts = searchProducts(productsList);

  // ? - if searchedProducts are empty, no need to fitler
  const filteredArray =
    searchedProducts.length > 0
      ? filterProducts(
          searchedProducts,
          selectedOptions.categories,
          selectedOptions.brands,
          selectedOptions.price,
          selectedOptions.rating
        )
      : searchedProducts;

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
