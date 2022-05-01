import { Component } from "react";

// CSS | Image
import "./../styles/css/Header.css";
import showcase from "./../images/showcase_4.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__container">
          <section className="header__text">
            <h1 className="text__header-text">Natural Cosmetice Collection</h1>
            <p className="text__paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              sunt consectetur quis, nemo quisquam natus culpa soluta
            </p>
            <button className="text__button">Show Now</button>
          </section>
          <section className="header__image">
            <img src={showcase} alt="" />
          </section>
        </div>
      </header>
    );
  }
}

export default Header;
