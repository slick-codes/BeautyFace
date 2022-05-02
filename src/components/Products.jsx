
import Product from './Product';

import './../styles/css/products.css';
const Products = function(){

    const products = []
    
    for( let i = 0; i < 3; i++)
        products.push( <Product /> )

    return (
        <div className="products">
            <section className="recommended">
                <h1 className="title">Recommended</h1>
                <div>
                    { products }
                </div>
            </section>
        </div>
    );
}

export default Products