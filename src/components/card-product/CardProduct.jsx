import { Link } from 'react-router-dom';
import { MiHeart } from '../../assets/icons';
import './card-product.css';

export default function CardProduct({ details }) {
  const { _id, brand, images, name, price } = details;

  return (
    <div className='card-product padding-md'>
      <Link to={`/product/${_id}`}>
        <img src={images[0].src} alt='Nike Strike' className='image' />
        <h4>{brand}</h4>
        <h3 className='font-size-ms'>{name}</h3>
        <p className='card-product__price font-size-ms font-weight-700'>
          ₹ {price.discounted}{' '}
          {price.discounted !== price.original && (
            <>
              <span className='font-size-sm font-weight-500'>
                $ {price.original}
              </span>{' '}
              <span className='font-size-sm font-weight-500'>
                {price.discount}%
              </span>
            </>
          )}
        </p>
      </Link>

      <div className='card-product__container-hover padding-horizontal-md grid-center'>
        <button
          className='button button-outline-secondary flex-center'
          onClick={() => console.log('add to wishlist')}
        >
          <MiHeart className='margin-right-xs font-size-ml' />
          WISHLIST
        </button>
      </div>
    </div>
  );
}
