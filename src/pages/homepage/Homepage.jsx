import './homepage.css';

import homepageHeroImg from '../../assets/images/homepage-hero.jpg';
import CardHomepageCategory from '../../components/card-homepage-category/CardHomepageCategory';

import logoNike from '../../assets/images/logo-nike.png';

export default function Homepage() {
  return (
    <main className='page-homepage'>
      <section className='homepage__section--hero'>
        <img src={homepageHeroImg} alt='Something' className='image' />
      </section>

      <section className='homepage__section--categories flex-column flex-align-center'>
        <h2 className='margin-top-lg font-size-xl'>
          One stop solution for all your{' '}
          <span className='text-highlight'>FOOTBALLING</span> Needs
        </h2>

        <hr />

        <div className='categories-container'>
          <CardHomepageCategory />
          <CardHomepageCategory />
          <CardHomepageCategory />
          <CardHomepageCategory />
          <CardHomepageCategory />
          <CardHomepageCategory />
        </div>
      </section>

      <section className='homepage__section--brands flex-column flex-align-center'>
        <h3 className='margin-vertical-lg font-size-lg'>Top Brands</h3>
        <ul className='brands-container flex-row flex-align-center'>
          <li>
            <a href='/nike' className='grid-center'>
              <img src={logoNike} alt='nike brand' className='image' />
            </a>
          </li>
          <li>
            <a href='/nike' className='grid-center'>
              <img src={logoNike} alt='nike brand' className='image' />
            </a>
          </li>{' '}
          <li>
            <a href='/nike' className='grid-center'>
              <img src={logoNike} alt='nike brand' className='image' />
            </a>
          </li>{' '}
          <li>
            <a href='/nike' className='grid-center'>
              <img src={logoNike} alt='nike brand' className='image' />
            </a>
          </li>{' '}
          <li>
            <a href='/nike' className='grid-center'>
              <img src={logoNike} alt='nike brand' className='image' />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
