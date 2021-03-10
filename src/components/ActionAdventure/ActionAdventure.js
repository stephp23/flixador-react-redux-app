import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActionAdventure.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

const ActionAdventure = () => {
  const [actionAdventureMovies, setActionAdventureMovies] = useState([]);
  const [getMovieId, setGetMovieId] = useState(0);
  const fetchActionAdventure = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`;
    let response = await axios.get(URL);
    setActionAdventureMovies(response.data.results);
  };

  useEffect(() => {
    fetchActionAdventure();
  }, []);

  return (
    <div className="row">
      <h2>Action Adventure</h2>
      <div className="row_posters">
        {actionAdventureMovies.map((moviesActionAdven) => {
          return (
            <img
              onClick={() => setGetMovieId(moviesActionAdven.id)}
              key={moviesActionAdven.id}
              className="row_poster"
              src={`${imgUrl}${moviesActionAdven.poster_path}`}
              alt={moviesActionAdven.name}
            />
          )
        }
        )}

      </div>
      
    </div>
  )
}

export default ActionAdventure
