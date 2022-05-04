import Product from "./Product";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./../styles/css/products.css";
const Products = function () {
  const recommendedProducts = [];

  for (let i = 0; i < 15; i++)
    recommendedProducts.push(<Product key={i} title={"sdfa sdkfja sdf kasdfajsdfasdfasdfsfd"} />);

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
          <div className="recommended__product-container">{recommendedProducts}</div>
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
