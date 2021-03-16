import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewReleases.css";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/original";
const NewReleases = ({ setGetMovieId, light }) => {
  const [newRelease, setNewRelease] = useState([]);
  const fetchNewRelease = async () => {
    let URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    let response = await axios.get(URL);
    setNewRelease(response.data.results);
  };
  useEffect(() => {
    fetchNewRelease();
  }, []);

  return (
    <div className="row1">
      <h2 className={light.checkedA ? "" : "text-light-mood"}>New Releases</h2>
      <div className="row_posters1">
        {newRelease.map((moviesNewReleses) => {
          return (
            <Link
              to={`/movie/${
                moviesNewReleses?.title ||
                moviesNewReleses?.name ||
                moviesNewReleses?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(moviesNewReleses.id)}
                key={moviesNewReleses.id}
                className="row_poster1"
                src={`${imgUrl}${moviesNewReleses.poster_path}`}
                alt={moviesNewReleses.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NewReleases;
