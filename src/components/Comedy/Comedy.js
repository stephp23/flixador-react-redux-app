import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Comedy.css";
import { Link } from "react-router-dom";
const imgUrl = "https://image.tmdb.org/t/p/original";
const Comedies = ({ setGetMovieId, light }) => {
  const [comedyMovies, setComedyMovies] = useState([]);
  const fetchComedyMovies = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=35`;
    let response = await axios.get(URL);
    setComedyMovies(response.data.results);
  };
  useEffect(() => {
    fetchComedyMovies();
  }, []);

  return (
    <div className="row1">
      <h2 className={light.checkedA ? "" : "text-light-mood"}>Comedies</h2>
      <div className="row_posters1">
        {comedyMovies.map((moviesComedy, index) => {
          return (
            <Link
              to={`/movie/${
                moviesComedy?.title ||
                moviesComedy?.name ||
                moviesComedy?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(moviesComedy.id)}
                key={index}
                className="row_poster1"
                src={`${imgUrl}${moviesComedy.poster_path}`}
                alt={moviesComedy.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Comedies;
