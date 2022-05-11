// Packages
import Carousel from 'react-multi-carousel';

// CSS
import "./../styles/css/catigories.css";
import ProductContext from "./../context/ProductsData";

import responsive from './../config/carousel-options'

function Catigories() {

    let slidePerView = 4;




  return (
    <ProductContext.Consumer>
      {(context) => (
        <div className="catigories__cover">
          <div className="catigories__nav">
            <section className="title">Popular Catigories</section>
          </div>
          <div className="catigories__content">
            {window.innerWidth > 950 ? (
              context.catigories.map((catigory, index) => (
                <div className="catigory__card" key={index}>
                  <div className="catigories__image"></div>
                  <div className="catigory__text">{catigory.name}</div>
                </div>
              ))
            ) : (
              <Carousel
                responsive={responsive}
                autoPlay={false}
                infinite={false}
                slidesToSlide={slidePerView}
                shouldResetAutoplay={false}
                minimumTouchDrag={ 220}
                transitionDuration={100}
                customTransition="all .3s"
              >
                {
                    context.catigories.map((catigory, index) => {
                        console.log(catigory)
                        return <div> {catigory.name} </div>
                    })
                }
              </Carousel>
            )}
          </div>
        </div>
      )}
    </ProductContext.Consumer>
  );
}

export default Catigories;
