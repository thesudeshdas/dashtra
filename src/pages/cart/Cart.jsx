import { CardProductCart } from '../../components';
import { useCart } from '../../contexts/cart.context';
import './Cart.css';

export default function Cart() {
  const {
    state: { cartList, total },
  } = useCart();

  return (
    <main className='page-cart'>
      <section className='section-cart-items padding-md'>
        <div className='padding-sm'>Check Delivery time & services</div>
        <div className='margin-vertical-sm padding-sm'>Available Offers</div>
        <div className='padding-sm'>2/2 items selcted</div>
        <ul className='margin-vertical-sm'>
          {cartList.map((product) => (
            <li key={product._id} className='margin-bottom-sm'>
              <CardProductCart details={product.product} />
            </li>
          ))}
        </ul>
      </section>
      <section className='section-price-details padding-md'>
        <div className='padding-vertical-sm'>
          <h3 className='font-size-md'>Price Details</h3>
          <ul className='padding-vertical-sm'>
            <li className='flex-justify-space-between'>
              Total MRP <span>₹ 3999</span>
            </li>
            <li className='flex-justify-space-between'>
              Discount on MRP <span>- ₹ 100</span>
            </li>
            <li className='flex-justify-space-between'>
              Coupon Discount <span>Apply Coupon</span>
            </li>
            <li className='flex-justify-space-between'>
              Convenience Fee <span>₹ 99 Free</span>
            </li>
          </ul>
        </div>
        <h2 className='flex-justify-space-between font-size-md font-weight-600 margin-vertical-md'>
          Total Amount
          <span>₹ {total}</span>
        </h2>
        <button className='button button-primary'>PLACE ORDER</button>
      </section>
    </main>
  );
}

// TODO - Change nav styling
