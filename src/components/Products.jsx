/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

// Importing Packages
import React from "react";
// import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductsContext from "./../api/data";

import responsive from "./../config/carousel-options";

// Imported Custome Components
import Product from "./Product";
// Imported Css
import "swiper/css";
import "./../styles/css/products.css";

const Products = function (props) {
  const recommendedProducts = [];
  const [slidePerView, setSlidePerView] = React.useState(2);
  const spaceBetween = 8;

  function updateSlidePerView() {
    setSlidePerView((oldValue) => {
      const windowWidth = window.innerWidth;
      const round = (numb) => Math.round(numb / 2);

      if (windowWidth >= 950) return round(5);
      else if (windowWidth >= 830) return round(4);
      else if (windowWidth >= 630) return round(5);
      else return 2;
    });
  }

  React.useEffect(function () {
    updateSlidePerView();
  }, []);

  window.onresize = updateSlidePerView;

  for (let i = 0; i < 10; i++)
    recommendedProducts.push(
      <Product key={i} title={"sdfa sdkfja sdf kasdfajsdfasdfasdfsfd"} />
    );

  return (
    <ProductsContext.Consumer>
      {(context) => (
        <div className="products">
          <div className="products__recommended">
            <section className="recommended">
              <h1 className="title">
                Recommended <div></div>
              </h1>
              <div className="recommended__product-container">
                <Carousel
                  responsive={responsive}
                  autoPlay={false}
                  infinite={false}
                  slidesToSlide={slidePerView}
                  shouldResetAutoplay={false}
                  //     minimumTouchDrag={ 220}
                  transitionDuration={100}
                  customTransition="all .3s"
                >
                  {
					  	context.products.map( (product, index) =>( 
							<Product 
								key={index} 
								name={ product.name } 
								thumbNail={product.thumbNail} 
								price={product.price}
								currency= { product.currency}
								isFavorite= {product.isFavorite}
							/>
							))
				  }
                </Carousel>
              </div>
            </section>
          </div>
          {/* Products Section */}
          <section className="products__container">
            <div className="products__inner-container">
              {recommendedProducts}
            </div>
          </section>
        </div>
      )}
    </ProductsContext.Consumer>
  );
};

export default Products;
