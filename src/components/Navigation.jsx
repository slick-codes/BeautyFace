/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

// CSS Importation
import "../styles/css/Navigation.css";

import { Component } from "react";
class Navigation extends Component {
  render() {
    console.log(faSearch);
    return (
      <nav className="nav">
        <div className="nav__container">
          <section className="logo">
            <h1>
              Beauty<span>Face</span>
            </h1>
          </section>
          <section className="navlink">
            <label id="activeLink">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">HOME</a>
            </label>
            <label class="dropdown">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <label>
                <a href="#">
                  CATIGORIES <FontAwesomeIcon icon={faAngleDown} />{" "}
                </a>
              </label>
              <section>
                  <div className="dropdown__content"></div>
              </section>
            </label>
            <label>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#">CONTACT</a>
            </label>
          </section>
          <section>
            <div className="search">
              <input type="search" placeholder="Search Product" />
              <button>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
            <div className="cart">
              <div className="cart__notification"></div>
              <FontAwesomeIcon icon={faCartPlus} />
            </div>
          </section>
        </div>
      </nav>
    );
  }
}

export default Navigation;
