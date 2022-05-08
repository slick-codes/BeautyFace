// import productImage from './../images/shoping_bag.png';

import './../styles/css/product.css';

const Product = function( props ){
    return (
        <>
            <div className="product">
                <div className="product__image" style={ {
                }}>
                    <img src={ props.thumbNail } alt="" />
                </div>

                <div className="product__details">
                    <h1 className="product__name">{ props.name }</h1>
                    <h2 className="product__price">
                        <span className="product__currency">{ props.currency} </span>
                        <span className="product__amount"> {props.price}</span>
                    </h2>
                <button className="product__button">Add to Cart</button>
                </div>
            </div>
        </>
    );
}

export default Product