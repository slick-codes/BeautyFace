import Product from "./Product";
import React from 'react';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide , useSwiper} from "swiper/react";

import "swiper/css";

import "./../styles/css/products.css";
const Products = function () {
  const recommendedProducts = [];
  console.log(window.innerWidth)
  const [ slidePerView , setSlidePerView ] = React.useState( window.innerWidth >= 950? 5 : 2 )
  
  function updateSlidePerView(){
    console.log('working')
    setSlidePerView( oldValue => {
      const windowWidth = window.innerWidth

      if(windowWidth >= 950)
        return 5
      else if (windowWidth >= 830)
        return 4
      else if (windowWidth >= 630) 
      return 3
      else 
        return 2
    } )
  }
  
  window.onresize = updateSlidePerView


  for (let i = 0; i < 15; i++)
    recommendedProducts.push(
      <SwiperSlide  key={i} >
        <Product title={"sdfa sdkfja sdf kasdfajsdfasdfasdfsfd"} />
      </SwiperSlide>
    );
    let swiper = useSwiper()
    console.log(swiper)

  return (
    <div className="products">
      <div className="products__recommended">
        <div className="button__container">
        <div className="right__button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="left__button">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
        </div>
        <section className="recommended">
          <h1 className="title">Recommended</h1>
          <div className="recommended__product-container">
            <Swiper
              slidesPerView={ slidePerView }
              spaceBetween={8}
              onSlideChange={() => console.log("slide just changed")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {recommendedProducts}
            </Swiper>
          </div>
        </section>
      </div>
      {/* Products Section */}
      <section className="products__container">
        <div className="products__inner-container">{recommendedProducts}</div>
      </section>
    </div>
  );
};

export default Products;
