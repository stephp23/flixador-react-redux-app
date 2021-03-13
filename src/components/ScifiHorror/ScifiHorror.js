import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ScifiHorror.css";

const imgUrl = "https://image.tmdb.org/t/p/original";
const ScifiHorror = () => {
  const [horror, setHorror] = useState([]);
  const [getMovieId, setGetMovieId] = useState(0);
  const fetchScifiHorror = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`;
    let response = await axios.get(URL);
    setHorror(response.data.results);
  };
  useEffect(() => {
    fetchScifiHorror();
  }, []);
  return (
    <div className="row">
      <h2>Scifi & Horrors</h2>
      <div className="row_posters">
        {horror.map((horrorMovies) => {
          return (
            <img
              onClick={() => setGetMovieId(horrorMovies.id)}
              key={horrorMovies.id}
              className="row_poster"
              src={`${imgUrl}${horrorMovies.poster_path}`}
              alt={horrorMovies.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ScifiHorror
