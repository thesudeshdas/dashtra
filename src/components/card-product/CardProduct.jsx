import { Link } from 'react-router-dom';
import { MajesticonsStar, MiHeart } from '../../assets/icons';
import { useWishlist } from '../../contexts/wishlist.context';
import './CardProduct.css';

export default function CardProduct({ details }) {
  const { _id, brand, images, name, price } = details;

  const product = details;

  const { addProductInServer } = useWishlist();

  return (
    <div className='card-product padding-md'>
      <Link to={`/product/${_id}`}>
        <img src={images[0].src} alt='Nike Strike' className='image' />
        <div className='card-product-rating flex-align-center font-weight-600 font-size-sm'>
          4.3 <MajesticonsStar />
        </div>
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

      <div className='card-product__container-hover padding-horizontal-md grid-center'>
        <button
          onClick={() => addProductInServer(product)}
          className='button button-outline-secondary flex-center'
        >
          <MiHeart className='margin-right-xs font-size-ml' />
          WISHLIST
        </button>
      </div>
    </div>
  );
}
