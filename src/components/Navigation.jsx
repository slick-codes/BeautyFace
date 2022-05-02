/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartPlus,
  faAngleDown,
  faNavicon,
  faCartFlatbed,
} from "@fortawesome/free-solid-svg-icons";

// CSS Importation
import "../styles/css/Navigation.css";

import React from "react";


const Navigation = function(){

    
    const [state, setState] = React.useState({
        navToggle: false
    })

    const toggleNav = function(){
        setState( prevState => ({
            ...prevState,
            navToggle: !prevState.navToggle
        }))
    }

    return (
      <>
        <nav className={ state.navToggle? 'active' : '' }>
          <div className="search__section">
            <h1>
              B<span>F</span>
            </h1>
            <div className="search">
              <section className="logo__section">
                <div className="search desktop ">
                  <input type="search" placeholder="Search Product" />
                  <button>
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
              </section>
            </div>
          </div>
          <div className="nav__container">
            <section className="logo">
              <h1 className="desktop">
                Beauty<span>Face</span>
              </h1>
              <h1 className="mobile">
                <FontAwesomeIcon icon={faCartFlatbed} />
              </h1>
            </section>
            <section className="navlink">
              <label id="activeLink">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">HOME</a>
              </label>
              <label className="dropdown">
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
            <section className="cart__config ">
              <div className="search desktop ">
                <input type="search" placeholder="Search Product" />
                <button>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
              <div className="cart desktop">
                <div className="cart__notification"></div>
                <FontAwesomeIcon icon={faCartPlus} />
              </div>
            </section>
            <section className="navicon mobile">
              <div onClick={ toggleNav }>
                <FontAwesomeIcon icon={faNavicon} />
              </div>
            </section>
          </div>
        </nav>
      </>
    );

}

export default Navigation;
