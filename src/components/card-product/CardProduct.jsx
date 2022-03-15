import { MiHeart } from '../../assets/icons';
import './card-product.css';

export default function CardProduct() {
  return (
    <div className='card card-product padding-md'>
      <img
        src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ef7c6db3-c897-4ab6-b787-7b2d7ad11190/strike-football-F8tjl8.png'
        alt='Nike Strike'
        className='image'
      />
      <h4>Nike</h4>
      <h3 className='font-size-ms'>Nike Strike Football</h3>
      <p className='card-product__price font-size-ms font-weight-700'>
        $400 <span className='font-size-sm font-weight-500'>$ 600</span>{' '}
        <span className='font-size-sm font-weight-500'>20%</span>
      </p>

      <div className='card-product__container-hover padding-horizontal-md grid-center'>
        <button className='button button-outline-secondary flex-center'>
          <MiHeart className='margin-right-xs font-size-ml' />
          WISHLIST
        </button>
      </div>
    </div>
  );
}
