import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import bannel1 from '../assets/img/products/f1.jpg';
import bannel2 from '../assets/img/products/f6.jpg';
import bannel3 from '../assets/img/products/n7.jpg';
import person1 from '../assets/img/blog/b1.jpg'
import Products from '../components/Products'
import ProductSlider from './ProductSlider';

const Main = () => {
  return (
    <>
    <section>
    <div className="container px-2 py-20 flex justify-center items-center">
      <div className="w-5/12 px-10">
        <h1 className='text-violet-700 text-5xl font-semibold py-6 mb-5'>Welcome To Us</h1>
        <p className='text-md py-6 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias repellendus corporis esse fuga minima! Consequuntur fugiat corporis praesentium facilis sapiente quia quod aliquam dolor sequi, hic maxime amet quidem ducimus.</p>
        <button className='bg-violet-700 px-20 py-2 rounded-lg text-lg font-semibold text-white hover:bg-violet-800'>Shop Now</button>
      </div>
      <div className="w-5/12">
        <Carousel autoPlay={true} showThumbs={false} showStatus={false} infiniteLoop={true}>
          <div>
            <img src={bannel1} className='w-[80%]' alt="Product1" />
          </div>
          <div>
            <img src={bannel2} className='w-[80%]' alt="Product2" />
          </div>
          <div>
            <img src={bannel3} className='w-[80%]' alt="Product3" />
          </div>
        </Carousel>
      </div>
    </div>
    </section>
    <section>
        <div className="container px-10 py-5">
            
            <div className='py-7 px-10 border rounded-xl'>
            <div>
                <h1 className='text-center text-3xl font-bold text-violet-700 underline mb-4'>Products</h1>
            </div>
                <Products />
            </div>
        </div>
    </section>
    <section>
    <div className="container px-10 py-5">
    <div>
        <h1 className='text-center text-3xl font-bold text-violet-700 underline mb-4'>New Arrivals</h1>
    </div>
    <ProductSlider className='px-6' />
    </div>
    </section>
    <section>
        <div className="container bg-violet-400 w-100  flex py-20 ">
            <div className="w-6/12 px-10">
                <img src={person1} className='w-[60%]' />
            </div>
            <div className='w-6/12 justify-center items-center py-32 '>
                <h1 className='mb-6 text-xl'>#SALE ON SUMMER COLLECTION 2023</h1>
                <h1 className='mb-10 text-6xl font-bold'>UP TO 50% OFF</h1>
                <button className='bg-violet-700 px-20 py-2 rounded-lg text-lg font-semibold text-white hover:bg-violet-800'>Shop Now</button>

            </div>
        
        </div>
    </section>
    </>
  );
}

export default Main;
