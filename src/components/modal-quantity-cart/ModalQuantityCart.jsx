import { MiClose } from '../../assets/icons';
import { useCart } from '../../contexts/cart.context';
import './ModalQuantityCart.css';

export default function ModalQuantityCart({ product, itemQuantity }) {
  const { updateQuantityInServer } = useCart();

  const quantityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='modal-quantity-cart padding-md'>
      <div className='flex-align-center margin-bottom-md padding-horizontal-sm'>
        <h3 className='font-size-md'>Choose Quantity</h3>
        <button className='grid-center'>
          <MiClose className='font-size-ml' />
        </button>
      </div>
      <ul>
        {quantityArray.map((quantity) => (
          <li>
            {itemQuantity === quantity ? (
              <button className='grid-center modal-active-quantity'>
                {quantity}
              </button>
            ) : (
              <button
                className='grid-center'
                onClick={() => updateQuantityInServer(product, quantity)}
              >
                {quantity}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
