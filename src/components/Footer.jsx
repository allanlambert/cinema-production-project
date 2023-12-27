import React from "react";
import logo from "../assets/creative-cinema-production-logo_23-2149509983.avif";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="footer__wrapper">
          <figure className="footer__logo--wrapper">
            <Link to="/">
              <img src={logo} alt="logo" className="footer__logo" />
            </Link>
          </figure>
          <ul className="footer__links--wrapper">
            <li className="footer__links">
              <Link to="/" className="footer__link">
                Home
              </Link>
            </li>
            <li className="footer__links">
              <a href="#" className="footer__link not-allowed">
                About
              </a>
            </li>
            <li className="footer__links">
              <Link to="/explore" className="footer__link">
                Explore
              </Link>
            </li>
          </ul>
          <div className="footer__terms">
            <a href="" className="footer__term">
              Terms of Use
            </a><span className="footer-line">|</span>
            <a href="" className="footer__term">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
