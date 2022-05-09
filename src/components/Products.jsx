// Importing Packages
import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductsContext from "./../context/ProductsData";
import responsive from "./../config/carousel-options";

// Imported Custome Components
import Product from "./Product";
// Imported Css
import "swiper/css";
import "./../styles/css/products.css";

const Products = function (props) {
  const recommendedProducts = [];
  const [slidePerView, setSlidePerView] = React.useState(2);

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
                <div className="group__nav">
                  <section className="title">Recommended</section>
                  <section className="call-to-action"> <button>See All</button></section>
                </div>
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
                  {context.products.map((product, index) => (
                    <Product
                      key={index}
                      name={product.name}
                      thumbNail={product.thumbNail}
                      price={product.price}
                      currency={product.currency}
                      isFavorite={product.isFavorite}
                    />
                  ))}
                </Carousel>
              </div>
            </section>
          </div>
          {/* Products Section */}
          <section className="products__container">
            <h1 className="title left">
			<div></div> <span>Products</span> 
            </h1>
            <div className="products__inner-container">
			{context.products.map((product, index) => (
                    <Product
                      key={index}
                      name={product.name}
                      thumbNail={product.thumbNail}
                      price={product.price}
                      currency={product.currency}
                      isFavorite={product.isFavorite}
                    />
                  ))}
            </div>
          </section>
        </div>
      )}
    </ProductsContext.Consumer>
  );
};

export default Products;
