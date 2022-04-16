import { MiClose } from '../../assets/icons';
import './CardProductCart.css';

export default function CardProductCart() {
  const product = {
    id: 'p003',
    brand: 'Puma',
    categories: ['Accessories'],
    description:
      'Introducing the PUMA Football Turf Ball, Propels you to greater milestones with its sleek, agile, functional design infused with pumas cutting edge technology.',
    fastDelivery: true,
    images: [
      {
        src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083799/01/fnd/IND/fmt/png/PUMA-Football-Turf-Ball',
        alt: 'Puma Football Turf Ball front',
      },
      {
        src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083799/01/bv/fnd/IND/fmt/png/PUMA-Football-Turf-Ball',
        alt: 'Puma Football Turf Ball back',
      },
      {
        src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083799/01/dt01/fnd/IND/fmt/png/PUMA-Football-Turf-Ball',
        alt: 'Puma Football Turf Ball zoom front',
      },
      {
        src: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/083799/01/dt02/fnd/IND/fmt/png/PUMA-Football-Turf-Ball',
        alt: 'Puma Football Turf Ball side',
      },
    ],
    link: 'https://in.puma.com/in/en/pd/puma-football-turf-ball/083799.html?dwvar_083799_color=01',
    name: 'Puma Football Turf Ball',
    price: {
      original: 1019,
      discounted: 1699,
      discount: 40,
    },
    rating: {
      stars: 0,
      number: 0,
    },
    specifications: [
      {
        heading: 'Color',
        detail: 'Yellow/Black',
      },
    ],
    status: 'active',
    stock: 20,
  };

  return (
    <div className='card-product-cart padding-sm flex-row'>
      <img src={product.images[0].src} alt='' className='image' />
      <div className='margin-left-sm'>
        <button className='font-size-ml'>
          <MiClose />
        </button>
        <h4 className='font-weight-600'>{product.brand}</h4>
        <h3 className='font-size-ms font-weight-400'>{product.name}</h3>
        <p className='font-size-ms margin-vertical-xs'>Size: L</p>
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
