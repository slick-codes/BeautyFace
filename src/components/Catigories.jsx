// Packages
import Carousel from 'react-multi-carousel';
import  config  from './../config/catigories.config'


import "./../styles/css/catigories.css";
import 'react-multi-carousel/lib/styles.css';

// CSS
import ProductContext from "./../context/ProductsData";

function Catigories() {
  return (
    <ProductContext.Consumer>
      {(context) => (
        <div className="catigories__cover">
          <div className="catigories__nav">
            <section className="title">Popular Catigories</section>
          </div>
          <div className="catigories__container">
            <Carousel
                responsive={ config.responsive }
                slidesToSlide={ 3 }
                shouldResetAutoplay={false} 
            >

                {
                    context.catigories.map((catigory, index) => (
                        <div className="catigories__content" key={index}>
                            <div className="catigory__card" key={index}>
                                <div className="catigories__image"></div>
                                <div className="catigory__text">{catigory.name}</div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
          </div>
                

        </div>
      )}
    </ProductContext.Consumer>
  );
}

export default Catigories;
