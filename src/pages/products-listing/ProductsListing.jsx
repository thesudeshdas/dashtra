import { useEffect, useState } from 'react';
import { CardProduct, Filter } from '../../components';
import { useProducts } from '../../contexts/products.context';
import { productsData } from '../../data/products.data';
import {
  categoriseProducts,
  filterBrand,
  filterProducts,
} from '../../utils/filter.utils';
import './products-listing.css';

export default function ProductsListing() {
  const {
    state: { productsList },
    dispatch: productsDispatch,
  } = useProducts();

  useEffect(() => {
    productsDispatch({
      type: 'INITIAL_FETCH_FROM_SERVER',
      payload: { productsList: productsData.productsList },
    });
  }, []);

  const [selectedOptions, setSelectedOptions] = useState({
    rating: 0,
    brands: [],
    // price: price.maximum,
    categories: '',
    availability: {
      includeOutOfStock: false,
      fastDeliveryOnly: false,
    },
  });

  const filteredArray = filterProducts(
    productsList,
    selectedOptions.categories,
    selectedOptions.brands
  );

  return (
    <main id='page-products-listing' className='flex-row'>
      <Filter handleFilters={setSelectedOptions} />
      <section className='padding-md'>
        <ul id='products-container'>
          {filteredArray.map((product) => (
            <li key={product.id}>
              <CardProduct details={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
