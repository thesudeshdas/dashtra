import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IconoirTruck,
  MajesticonsStarLine,
  MajesticonsTagLine,
  MajesticonsTextboxLine,
  MajesticonsTruckLine,
} from '../../assets/icons';
import './product-details.css';

export default function ProductDetails() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/products/${productId}`
        );

        response.status === 200 && setProduct(response.data.product);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <main id='page-product-details' className='flex-row'>
      {/* // TODO - Add history here */}
      <nav className='padding-md'>
        <Link to='/'>Home</Link> / <Link to={'/football'}>Football</Link> /{' '}
        <Link to='/brands/nike'>Nike</Link>
      </nav>
      <section
        id='section-image-product-details'
        className='flex-wrap flex-justify-space-between padding-md'
      >
        {product.images?.map((image) => (
          <img
            key={image._id || image.alt}
            src={image.src}
            alt={image.alt}
            className='image'
          />
        ))}
      </section>
      <section className='padding-md'>
        <h3 className='font-size-md font-weight-600'>{product.brand}</h3>
        <h1 className='font-size-ml font-weight-400'>{product.name}</h1>

        <hr className='margin-vertical-sm' />

        <ul id='product-details-price' className='flex-align-center'>
          <li>
            <h2 className='font-weight-600'>₹ {product.price?.discounted}</h2>
          </li>
          <li>
            <h3 className='margin-horizontal-sm'>
              ₹ {product.price?.original}
            </h3>
          </li>
          <li>
            <h3>({product.price?.discount}% off ) </h3>
          </li>
        </ul>
        <small>inclusive of all taxes</small>

        <div
          id='product-details-CTA'
          className='flex-justify-space-between margin-vertical-md'
        >
          <button className='button button-primary'>ADD TO CART</button>
          <button className='button button-outline-secondary'>
            ADD TO CART
          </button>
        </div>

        <div className='flex-row flex-align-center margin-vertical-sm'>
          <h3 className='font-size-md font-weight-600'>DELIVERY OPTIONS</h3>
          <span className='font-size-ml flex-center margin-left-sm'>
            <MajesticonsTruckLine />
          </span>
        </div>

        <form id='form-pin-product-details' action='' className='flex-column'>
          <input
            type='text'
            placeholder='Enter a PIN code'
            className='margin-bottom-sm padding-sm font-size-md'
          />
          <small className='font-size-sm'>
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </small>
        </form>

        <hr className='margin-vertical-lg' />

        <div className='flex-row flex-align-center margin-vertical-sm'>
          <h3 className='font-size-md font-weight-600'>BEST OFFERS</h3>
          <span className='font-size-ml flex-center margin-left-sm'>
            <MajesticonsTagLine />
          </span>
        </div>

        <ul>
          <li>
            <h4 className='font-weight-600'>EMI Option available</h4>
            <p className='font-size-sm'>EMI starting from Rs.38/month</p>
          </li>
        </ul>

        <hr className='margin-vertical-lg' />

        <div className='flex-row flex-align-center margin-vertical-sm'>
          <h3 className='font-size-md font-weight-600'>PRODUCT DETAILS</h3>
          <span className='font-size-ml flex-center margin-left-sm'>
            <MajesticonsTextboxLine />
          </span>
        </div>

        <p className='font-weight-400'>{product.description}</p>

        <h4 className='margin-vertical-sm font-weight-500'>SPECIFICATIONS</h4>

        <ul
          id='list-specifications'
          className='flex-wrap flex-justify-space-between font-weight-400'
        >
          {product.specifications?.map((item) => (
            <li key={item._id || item.heading}>
              <label htmlFor='' className='font-size-sm'>
                {item.heading}
              </label>
              <p>{item.detail}</p>
            </li>
          ))}
        </ul>

        <hr className='margin-vertical-lg' />

        <div className='flex-row flex-align-center margin-vertical-sm'>
          <h3 className='font-size-md font-weight-600'>RATINGS</h3>
          <span className='font-size-ml flex-center margin-left-sm'>
            <MajesticonsStarLine />
          </span>
        </div>

        <h2 className='font-size-xl font-weight-400'>4.4</h2>

        <hr className='margin-bottom-lg' />
      </section>
    </main>
  );
}
