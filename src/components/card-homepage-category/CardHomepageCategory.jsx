import './card-homepage-category.css';

import cardHomepageCategoryShoes from '../../assets/images/card-homepage-cateorgy-shoe.jpg';

export default function CardHomepageCategory() {
  return (
    <div className='card-homepage--category'>
      <img src={cardHomepageCategoryShoes} alt='Shoes' className='image' />
    </div>
  );
}
