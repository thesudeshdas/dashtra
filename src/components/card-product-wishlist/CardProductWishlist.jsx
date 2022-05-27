import { Link } from 'react-router-dom';
import { MiClose, MiShoppingCart } from '../../assets/icons';
import { useWishlist } from '../../contexts/wishlist.context';
import './CardProductWishlist.css';

export default function CardProductWishlist({ details }) {
  const { _id, brand, images, name, price } = details;

  const { removeProductFromServer } = useWishlist();

  return (
    <div className='card-product--wishlist padding-md'>
      <button
        onClick={() => removeProductFromServer({ _id })}
        className='font-size-ml'
      >
        <MiClose />
      </button>

      <Link to={`/product/${_id}`}>
        <img src={images[0].src} alt='Nike Strike' className='image' />
        <h4 className='font-weight-600'>{brand}</h4>
        <h3 className='font-size-ms font-weight-400'>{name}</h3>
        <p className='font-size-sm'>
          <strong className='font-size-ms'>₹ {price.discounted} </strong>
          {price.discounted !== price.original && (
            <>
              <span className='text-strike margin-horizontal-xs'>
                ₹ {price.original}
              </span>{' '}
              <span>{price.discount}%</span>
            </>
          )}
        </p>
      </Link>

      <div className='card-product__container--wishlist grid-center'>
        <button
          className='button button-outline-secondary flex-center'
          onClick={() => console.log('add to wishlist')}
        >
          <MiShoppingCart className='margin-right-xs font-size-ml' />
          MOVE TO CART
        </button>
      </div>
    </div>
  );
}
