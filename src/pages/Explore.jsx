// Import necessary libraries and components
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/LoadingSpinner";
import searchImg from "../assets/undraw_undraw_undraw_undraw_undraw_undraw_undraw_undraw_search_engines_041x_-2-_cl95_o7o8_pigd_-1-_wbm3_t5p8_-1-_mt5l_(2)_dhxr.png";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = "9bf28553688d24df755a02eaf1b2d840";

function Explore() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchImage, setShowSearchImage] = useState(true);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const navigate = useNavigate();

  const fetchMovies = async () => {
    try {
      setLoading(true);
      setShowSearchImage(false);

      const { data } = await axios.get(API_URL, {
        params: { query: searchQuery, api_key: API_KEY },
      });

      console.log("Fetched data:", data);

      setTimeout(() => {
        const filteredMovies = (data.results || []).filter(movie => movie.poster_path && movie.title);
        
        setMovies(filteredMovies.slice(0, 12)); 
        setLoading(false);
        setShowSearchImage(!(filteredMovies.length > 0));
      }, 1500);
    } catch (error) {
      console.error("Error finding movies", error);
      setLoading(false);
      setShowSearchImage(true);
    }
  };

  const handleSearch = () => {
    fetchMovies();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleSearchIconClick = () => {
    handleSearch();
  };

  const handleMovieClick = (movieId) => {
    setSelectedMovieId(movieId);
    navigate(`/movies/${movieId}`);
  };

  return (
    <>
      <section id="explore">
        <form className="search__wrapper">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter movie title"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            onKeyDown={handleKeyPress}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={handleSearchIconClick}
            className="search-icon"
          />
        </form>
        
        <figure className={`search__img--wrapper ${showSearchImage ? 'visible' : 'hidden'}`}>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <img className={`search__img ${showSearchImage ? 'visible' : 'hidden'}`} src={searchImg} alt="Search Image" />
          )}
        </figure>
        
        <div className="movie-list">
          {loading ? (
            <LoadingSpinner />
          ) : (
            movies.map((movie) => (
              <div
                key={movie.id}
                className={`movie-item ${selectedMovieId === movie.id ? "selected-movie" : ""}`}
                onClick={() => handleMovieClick(movie.id)}
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="movie__img"
                  />
                )}
                <h1 className="movie-title">{movie.title}</h1>
              </div>
            ))
          )}
        </div>

        <Footer />
      </section>
    </>
  );
}

export default Explore;
