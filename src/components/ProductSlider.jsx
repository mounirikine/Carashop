import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productsList } from '../components/api/Data.js';

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Slide transition duration in milliseconds
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay interval in milliseconds
  };

  const productElements = productsList.map((product, index) => (
    <div key={index} className="ml-6 border px-2 py-3 rounded-lg ">
      {/* Your product card content goes here */}
      <div className='mx-6' >
        <div className="w-100">
          <img src={product.image} />
        </div>
        <div className="">
          <h2 className='py-3'>{product.title}</h2>
          <div className="grid grid-cols-2 justify-center items-center text-center px-1 gap-3 py-3">
            <span className="items-center gap-1 flex">{product.category}</span>
            <span className="px-3 justify-center items-center gap-1 flex">{product.price}<i className="ri-money-dollar-circle-line"></i></span>
            <span className="px-3 justify-center items-center gap-1 flex">{product.rating}
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-fill"></i>
              <i className="ri-star-half-fill"></i>
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-1">
          <button className="bg-violet-700 text-white px-3 py-[5px] cursor-pointer hover:bg-violet-800 rounded-xl">View Details</button>
          <button className="bg-violet-700 text-white px-3 py-[5px] cursor-pointer hover-bg-violet-800 rounded-xl">Add To Cart</button>
        </div>
      </div>
    </div>
  ));

  return (
    <Slider {...settings} className='px-10'>
      {productElements}
    </Slider>
  );
};

export default ProductSlider;
