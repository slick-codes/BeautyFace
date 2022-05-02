import productImage from './../images/shoping_bag.png';

import './../styles/css/product.css';

const Product = function(){

    return (
        <>
            <div className="product">
                <div className="product__image">
                    <img src={ productImage } alt="" />
                </div>
                <div className="product__details">
                    <h1 className="product__name">Sunglow rectangular Rimless</h1>
                    <h2 className="product__price">
                        <span className="product__currency">NGN</span>
                        <span className="product__amount">23,000</span>
                    </h2>
                </div>
            </div>
        </>
    );
}

export default Product