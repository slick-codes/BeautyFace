import { Component } from "react";

// CSS | Image
import "./../styles/css/header.css";
import showcase from "./../images/showcase_4.png";
import shopingBag from "./../images/shoping_bag.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <div className="header__inner-container">
            <section className="header__image">
              <img src={shopingBag} alt="" className="mobile" />
              <img src={showcase} alt="" className="desktop" />
            </section>
            <section className="header__text">
              <div>
                <h1 className="text__header-text">
                  {" "}
                  <span>Shop</span> In Style With Us<span>.</span>
                </h1>
                <p className="text__paragraph">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
                  sunt consectetur quis, nemo quisquam natus culpa soluta
                </p>
                <button className="text__button">Show Now</button>
              </div>
            </section>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
