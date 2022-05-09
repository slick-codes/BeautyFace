/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faNavicon,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Nav from './Nav';

// CSS Importation
import "../styles/css/navigation.css";
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
        <div className="overlay" onClick={toggleNav}></div>
            <div className="nav__container">
                <section className="logo">
                    <h1 className="desktop">Beauty<span>Face</span></h1>
                    {/* <h1 class="mobile">B<span>F</span></h1> */}
                    <div className="mobile catigories" onClick={toggleNav}>
                        <div>
                        <FontAwesomeIcon icon={ faNavicon } />
                        </div>
                        <p>CATIGORIES</p>
                    </div>
                </section>

                <section className="navsection">
                <section className="navlink">
                   <Nav />
                </section>
                    <section className="search">
                        <div className="search__container">
                            <input type="text" placeholder="Search Product" />
                            <button className="search__button"> <FontAwesomeIcon icon={ faSearch }/> </button>
                        </div>
                        <div className="mobile__search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <div className="cart">
                            <FontAwesomeIcon icon={faCartArrowDown} />
                        </div>
                    </section>
                </section>
            </div>
        </nav>
      </>
    );
}

export default Navigation;
