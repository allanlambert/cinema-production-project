import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9bf28553688d24df755a02eaf1b2d840`
        );

        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="back-btn__wrapper">
        <Link to="/explore" className="back-btn">
          <FontAwesomeIcon className="left-arrow" icon={faArrowLeft} />
          Go back
        </Link>
      </div>
      <div className="container">
        <div className="movie__details">
          <figure className="movie__details-img--wrapper">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
              alt=""
              className="movie__details--img"
            />
          </figure>
          <div className="movie__details--info">
            <h1 className="movie__details--title gray">{movieDetails.title}</h1>
            <h2 className="gray">
              Popularity: {Math.floor(movieDetails.popularity)}
            </h2>
            <p className="movie__details--para gray">
              <span className="bold">Description: </span>
              {movieDetails.overview}
            </p>
            <p className="movie__details--date gray">
              <span className="bold">Release Date:</span>{" "}
              {movieDetails.release_date}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
