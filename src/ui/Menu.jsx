import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  function openMenu() {
    document.body.classList.add("menu--open");
    window.scrollTo(0, 0);
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <>
      <div className="icon__container">
        <FontAwesomeIcon icon={faBars} onClick={openMenu} />
      </div>
      <div className="menu__backdrop">
        <button className="btn__menu btn__menu--close" onClick={closeMenu}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="menu__links">
          <li className="menu__list">
            <Link to="/" className="menu__link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="menu__list">
            <Link to="/" className="menu__link not-allowed" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="menu__list">
            <Link to='/explore' className="menu__link" onClick={closeMenu}>
              Explore
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Menu;
