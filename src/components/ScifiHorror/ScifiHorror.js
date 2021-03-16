import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ScifiHorror.css";

const imgUrl = "https://image.tmdb.org/t/p/original";
const ScifiHorror = ({ setGetMovieId, light }) => {
  const [horror, setHorror] = useState([]);
  const fetchScifiHorror = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`;
    let response = await axios.get(URL);
    setHorror(response.data.results);
  };
  useEffect(() => {
    fetchScifiHorror();
  }, []);
  return (
    <div className="row1">
      <h2 className={light.checkedA ? "" : "text-light-mood"}>
        Scifi & Horrors
      </h2>
      <div className="row_posters1">
        {horror.map((horrorMovies) => {
          return (
            <Link
              to={`/movie/${
                horrorMovies?.title ||
                horrorMovies?.name ||
                horrorMovies?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(horrorMovies.id)}
                key={horrorMovies.id}
                className="row_poster1"
                src={`${imgUrl}${horrorMovies.poster_path}`}
                alt={horrorMovies.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ScifiHorror;
