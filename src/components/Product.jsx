import { useRef, useState } from "react";
import "./../styles/css/product.css";

import TruncateString from "truncate-string-react";

// Font Awesome Icon Importation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Product = function (props) {
  const [isLoaded, setIsLoaded] = useState(true);
  const imageRef = useRef(); // refer to product image

  // Manage the size of product images
  const imageLoad = function (event) {
    setTimeout(() => setIsLoaded(!isLoaded), 2000);
    const image = event.target;
    if (image.clientHeight > image.clientWidth) image.style.height = "100%";
    else image.style.width = "100%";
  };

  return (
    <>
      <div className="product">
        <div
          className={`product__image ${isLoaded && "--loading"}`}
          style={{
            backgroundImage: `url(${isLoaded ? props.thumbNail : ""})`,
            filter: `brightness(3em)`,
          }}
        >
          <img
            src={props.thumbNail}
            ref={imageRef}
            onLoad={imageLoad}
            style={{
              display: isLoaded ? "none" : "block",
            }}
            alt={props.name}
          />

          {isLoaded && <FontAwesomeIcon icon={faSpinner} spin={true} />}
        </div>

        <div className="product__details">
          <h1 className="product__name">
            <TruncateString
              string={ props.name }
              length={20}
              typeCount={2}
              type="."
            />
          </h1>
          <h2 className="product__price">
            <span className="product__currency">{props.currency} </span>
            <span className="product__amount"> {props.price}</span>
          </h2>
          {!props.isFavorite ? (
            <button className="product__button">Add to Cart</button>
          ) : (
            <button className=" product__button favorite">
              {<FontAwesomeIcon icon={faHeart} />}
              <div>Remove from Cart</div>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
