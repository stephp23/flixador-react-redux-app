import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FullMovie.css";

const FullMovie = ({ movieId }) => {
  const [fullMoviebanar, setFullMoviebanar] = useState([]);
  const FetchFullMovie = async () => {
    let URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_APIKEY}`;
    const response = await axios.get(URL);
    setFullMoviebanar(response.data);
  };
  console.log(fullMoviebanar);
  useEffect(() => {
    FetchFullMovie();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="app">
      <>
        <header
          className="banar"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${fullMoviebanar?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banar-info">
            <h1 className="banar-title">
              {fullMoviebanar?.title ||
                fullMoviebanar?.name ||
                fullMoviebanar?.orignal_name}
            </h1>
            <div className="banar-buttons">
              <button
                className="banar-button"
                // onClick={() => handleClickMovie(fullMoviebanar)}
              >
                Play
              </button>
            </div>
            <h1 className="banar-description">
              {truncate(fullMoviebanar?.overview, 150)}
            </h1>
          </div>
          <div className="banar-fadeBottom"></div>
        </header>
      </>
      <div className="full-movie-dea">
        <h3> Movie Title : {fullMoviebanar.original_title}</h3>
        <h3>release Date :{fullMoviebanar.release_date}</h3>
      </div>
    </div>
  );
};

export default FullMovie;
