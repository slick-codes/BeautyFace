import Product from "./Product";

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./../styles/css/products.css";
const Products = function () {
  const products = [];

  for (let i = 0; i < 16; i++) products.push(<Product />);

  return (
    <div className="products">
      <div className="recommended_product__container">
          <div className="right__button">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="left__button">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        <section className="recommended">
          <h1 className="title">Recommended</h1>
          <div>{products}</div>
        </section>
      </div>
    </div>
  );
};

export default Products;
