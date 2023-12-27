import React, { useEffect } from "react";
import landingImg from "../assets/undraw_home_cinema_l7yl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";

function Landing() {

  return (
    <>
      <section id="landing">
        <div className="landing__container">
          <div className="content__on-left">
            <h1 className="content__title">
              Welcome to{" "}
              <span className="purple landing-animation">
                Cinema Productions!
              </span>
            </h1>
            <p className="content__para">
              <span className="purple">Cinema Productions</span> contains every
              movie you could possibly think of, including some anime!
            </p>
            <button className="content-btn">
              <Link to={`/explore`} className="content-link">
                Explore
                <span className="btn-arrow">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </button>
          </div>
          <div className="content__on-right">
            <figure className="content__img--wrapper">
              <img src={landingImg} alt="" className="content__img" />
            </figure>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Landing;
