import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NewReleases.css";

///console.log(process.env.REACT_APP_APIKEY);
const imgUrl = "https://image.tmdb.org/t/p/original";
const NewReleases = () => {
  const [newRelease, setNewRelease] = useState([]);
  const [getMovieId, setGetMovieId] = useState(0);
  const fetchNewRelease = async () => {
    let URL = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    let response = await axios.get(URL);
    setNewRelease(response.data.results);
  };
  useEffect(() => {
    fetchNewRelease();
  }, []);

  return (
    <div className="row">
      <h2>New Releases</h2>
      <div className="row_posters">
        {newRelease.map((moviesNewReleses) => {
          return (
            <img
              onClick={() => setGetMovieId(moviesNewReleses.id)}
              key={moviesNewReleses.id}
              className="row_poster"
              src={`${imgUrl}${moviesNewReleses.poster_path}`}
              alt={moviesNewReleses.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewReleases;
