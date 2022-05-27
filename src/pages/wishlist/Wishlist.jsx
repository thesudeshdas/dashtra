import { CardProductWishlist } from '../../components';
import { useWishlist } from '../../contexts/wishlist.context';
import './Wishlist.css';

export default function Wishlist() {
  const {
    state: { wishlist },
  } = useWishlist();

  return (
    <main className='page-wishlist'>
      <section className='padding-md'>
        <h2 className='margin-bottom-md'>My Wishlist</h2>
        <ul className='products-container--wishlist'>
          {wishlist.map((product) => (
            <li key={product._id} className='margin-bottom-sm'>
              <CardProductWishlist details={product.product} />
            </li>
          ))}
        </ul>
      </section>
      <section className='padding-md'>Recommendation</section>
    </main>
  );
}
