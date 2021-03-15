import React, { useState, useEffect } from "react";
import axios from "axios";

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
      <div className="full-movie-dea"></div>
    </>
  );
};

export default FullMovie;
