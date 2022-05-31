import { MiClose } from '../../assets/icons';
import { useCart } from '../../contexts/cart.context';
import './CardProductCart.css';

export default function CardProductCart({ details, quantity }) {
  const { removeProductFromServer } = useCart();

  const product = details;

  return (
    <div className='card-product-cart padding-sm flex-row'>
      <img src={product.images[0].src} alt='' className='image' />
      <div className='margin-left-sm'>
        <button
          onClick={() => removeProductFromServer(product)}
          className='cart-delete-item font-size-ml'
        >
          <MiClose />
        </button>
        <h4 className='font-weight-600'>{product.brand}</h4>
        <h3 className='font-size-ms font-weight-400'>{product.name}</h3>
        <div className='flex-row font-size-ms margin-vertical-xs'>
          <button className='button'>Size: S</button>
          <button className='button margin-left-sm'>Qty: {quantity}</button>
        </div>
        <p className='font-size-sm margin-vertical-xs'>
          <strong className='font-size-ms'>
            ₹ {product.price.discounted}{' '}
          </strong>
          {product.price.discounted !== product.price.original && (
            <>
              <span className='text-strike margin-horizontal-xs'>
                ₹ {product.price.original}
              </span>{' '}
              <span>{product.price.discount}%</span>
            </>
          )}
        </p>
        <p className='font-size-ms'>
          Delivery by <strong className='font-weight-700'> 21 Apr 2022</strong>
        </p>
      </div>
    </div>
  );
}
