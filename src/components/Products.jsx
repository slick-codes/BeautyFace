/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

// Importing Packages
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Imported Custome Components
import Product from "./Product";
// Imported Css
import "swiper/css";
import "./../styles/css/products.css";

const Products = function () {
  const recommendedProducts = [];
  const [slidePerView, setSlidePerView] = React.useState(2);
  const spaceBetween = 8;

  function updateSlidePerView() {
    setSlidePerView((oldValue) => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 950) return 5;
      else if (windowWidth >= 830) return 4;
      else if (windowWidth >= 630) return 3;
      else return 2;
    });
  }

  React.useEffect(function () {
    updateSlidePerView();
  }, []);

  window.onresize = updateSlidePerView;

  for (let i = 0; i < 14; i++)
    recommendedProducts.push(
      <SwiperSlide key={i}>
        <Product title={"sdfa sdkfja sdf kasdfajsdfasdfasdfsfd"} />
      </SwiperSlide>
    );

  const ref = React.useRef("swiper");

  function slideDir(dir) {
    dir = dir.toLowerCase();
    const element = ref.current;
    const childElement = element.querySelector(".swiper-wrapper");
        let childElementScrollWidth = childElement.scrollWidth

    const parentElementWidth = element.offsetWidth + spaceBetween;

    const transformValue = Number(
      // extract the transform value from string
      childElement.style.transform.split("(")[1].split(",")[0].split("px")[0]
    );
    let size = 0;

    const products = element.querySelectorAll(".swiper-slide");

    products.forEach((node) => {
      size += node.clientWidth + spaceBetween + products.length;
      
    });

    // TODO export function to external file
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return rect.left;
    }

    const lastProduct = element.querySelector(".swiper-slide:last-child");
    const lastProductInViewPort = isInViewport(lastProduct);

    console.log(lastProductInViewPort, parentElementWidth);

    const transitionValue = () => {
      if (dir !== "prev") {
        // console.log(transformValue - parentElementWidth, -size);

        if (lastProductInViewPort <= parentElementWidth) {
          console.log('got here');
          return - childElementScrollWidth + parentElementWidth - 5
        } else return transformValue - parentElementWidth;
      } else {
        if (transformValue + parentElementWidth > 0) {
          return 0;
        } else {
          return transformValue + parentElementWidth;
        }
      }
    };

    childElement.style.transition = ".3s";
    childElement.style.transform = `translate3D(${transitionValue()}px, 0px, 0px)`;
  }

  return (
    <div className="products">
      <div className="products__recommended">
        <div className="button__container">
          <button className="right__button" onClick={() => slideDir("prev")}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button className="left__button" onClick={() => slideDir("next")}>
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <section className="recommended">
          <h1 className="title">Recommended</h1>
          <div className="recommended__product-container">
            <Swiper
              slidesPerView={slidePerView}
              spaceBetween={spaceBetween}
              ref={ref}
              scrollbar={{
                draggable: true,
              }}
              // onSlideChange={() => console.log("slide just changed")}
              // onSwiper={(swiper) => console.log(swiper)}
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
