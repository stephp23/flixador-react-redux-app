import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActionAdventure.css";
import { Link } from "react-router-dom";
const imgUrl = "https://image.tmdb.org/t/p/original";
const ActionAdventure = ({ setGetMovieId }) => {
  const [actionAdventureMovies, setActionAdventureMovies] = useState([]);
  const fetchActionAdventure = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`;
    let response = await axios.get(URL);
    setActionAdventureMovies(response.data.results);
  };
  useEffect(() => {
    fetchActionAdventure();
  }, []);

  return (
    <div className="row1">
      <h2>Action Adventure</h2>
      <div className="row_posters1">
        {actionAdventureMovies.map((moviesActionAdven, index) => {
          return (
            <Link
              to={`/movie/${
                moviesActionAdven?.title ||
                moviesActionAdven?.name ||
                moviesActionAdven?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(moviesActionAdven.id)}
                key={index}
                className="row_poster1"
                src={`${imgUrl}${moviesActionAdven.poster_path}`}
                alt={moviesActionAdven.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ActionAdventure;
