import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TopRatedMov.css";
import { Link } from "react-router-dom";
const imgUrl = "https://image.tmdb.org/t/p/original";
const TopRatedMov = ({ setGetMovieId }) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const fetchTopRatedMovies = async () => {
    let URL =`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`
    let response = await axios.get(URL);
    setTopRatedMovies(response.data.results);
  };
  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  return (
    <div className="row1">
      <h2>Top Rated Movies</h2>
      <div className="row_posters1">
        {topRatedMovies.map((moviesTopRated, index) => {
          return (
            <Link
              to={`/movie/${
                moviesTopRated?.title ||
                moviesTopRated?.name ||
                moviesTopRated?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(moviesTopRated.id)}
                key={index}
                className="row_poster1"
                src={`${imgUrl}${moviesTopRated.poster_path}`}
                alt={moviesTopRated.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TopRatedMov;
