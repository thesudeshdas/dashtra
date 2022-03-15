import { CardProduct, Filter } from '../../components';
import { productsData } from '../../data/products.data';
import './products-listing.css';

export default function ProductsListing() {
  return (
    <main id='page-products-listing' className='flex-row'>
      <Filter />
      <section className='padding-md'>
        <ul id='products-container'>
          {productsData.productsList.map((product) => (
            <li>
              <CardProduct />
            </li>
          ))}
          {productsData.productsList.map((product) => (
            <li>
              <CardProduct />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
