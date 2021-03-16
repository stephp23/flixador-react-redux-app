import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MostPopularMovies.css";
import { Link } from "react-router-dom";
const imgUrl = "https://image.tmdb.org/t/p/original";
const MostPopularMov = ({ setGetMovieId, light }) => {
  const [mostPopularMovies, setMostPopularMovies] = useState([]);
  const fetchMostPopularMovies = async () => {
    let URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;
    let response = await axios.get(URL);
    setMostPopularMovies(response.data.results);
  };
  useEffect(() => {
    fetchMostPopularMovies();
  }, []);

  return (
    <div className="row1">
      <h2 className={light.checkedA ? "" : "text-light-mood"}>
        Most Popular Movies
      </h2>
      <div className="row_posters1">
        {mostPopularMovies.map((moviesMostPopular, index) => {
          return (
            <Link
              to={`/movie/${
                moviesMostPopular?.title ||
                moviesMostPopular?.name ||
                moviesMostPopular?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(moviesMostPopular.id)}
                key={index}
                className="row_poster1"
                src={`${imgUrl}${moviesMostPopular.poster_path}`}
                alt={moviesMostPopular.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopularMov;
