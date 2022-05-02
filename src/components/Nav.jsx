
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Nav = function(){


    return (
        <>
            <div className="navlink__container">
                <label> <a href="#">HOME</a> </label>
                <label className="dropdown">
                    <label> <a href="#">CARTIGORIES <FontAwesomeIcon icon={ faAngleDown } /> </a> </label>
                    <section className="dropdown__content">
                        <div className="dropdown__container"></div>
                    </section>
                </label>
                <label> <a href="#">CONTACT</a> </label>
            </div>
        </>
    );
}

export default Nav