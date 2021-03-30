import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import "./FullMovie.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/original";
const FullMovie = ({ movieId, setGetMovieId, light }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  const [fullMoviebanar, setFullMoviebanar] = useState([]);
  const [fulltrailerUrl, setfullTrailerUrl] = useState("");
  const [similarMovie, SetsimilarMovie] = useState([]);
  const fetchFullMovie = async () => {
    let URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_APIKEY}`;
    const response = await axios.get(URL);
    setFullMoviebanar(response.data);
  };

  const fetchSimilarMovie = async () => {
    let urlSimilar = `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;
    const response = await axios.get(urlSimilar);
    SetsimilarMovie(response.data.results);
  };

  ////https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1

  useEffect(() => {
    fetchSimilarMovie();
  }, [fullMoviebanar]);
  useEffect(() => {
    fetchFullMovie();
  }, [fullMoviebanar]);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClickMovie = (fullMoviebanar) => {
    if (fulltrailerUrl) {
      setfullTrailerUrl("");
    } else {
      movieTrailer(
        fullMoviebanar?.name ||
          fullMoviebanar?.title ||
          fullMoviebanar?.orignal_name ||
          ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setfullTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
    }
  };

  return (
    <div className={light.checkedA ? "app" : "light-mood"}>
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
                onClick={() => handleClickMovie(fullMoviebanar)}
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
        {movies ? (
          <div className="row1">
            <h2 className={light.checkedA ? "" : "text-light-mood"}>
              {text ? `what you looking for : ${text}` : ""}
            </h2>
            <div className="row_posters1">
              {movies.map((actionMovie) => {
                return (
                  <Link
                    to={`/movie/${
                      actionMovie?.title ||
                      actionMovie?.name ||
                      actionMovie?.orignal_name
                    }`}
                  >
                    <img
                      onClick={() => setGetMovieId(actionMovie.id)}
                      key={actionMovie.id}
                      className="row_poster1"
                      src={`${imgUrl}${actionMovie.poster_path}`}
                      alt={actionMovie.name}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        ) : (
          ""
        )}
        {fulltrailerUrl && <YouTube videoId={fulltrailerUrl} opts={opts} />}
      </>
      <div
        className={light.checkedA ? "full-movie-dea" : "full-movie-dea-light"}
      >
        <Typography variant="h3">{fullMoviebanar.original_title}</Typography>
        <div className={light.checkedA ? "date-runtime" : "date-runtime-light"}>
          <Typography variant="h5">{fullMoviebanar.release_date}</Typography>
        </div>
        <div className={light.checkedA ? "date-runtime" : "date-runtime-light"}>
          <Typography variant="h5">
            Run Time : {fullMoviebanar.runtime} min
          </Typography>
        </div>
      </div>
      <div
        className={light.checkedA ? "full-movie-det" : "full-movie-det-light"}
      >
        <Typography variant="h6">{fullMoviebanar.overview}</Typography>
      </div>
      <div className="row1">
        <h2 className={light.checkedA ? "" : "text-light-mood"}>
          Similar Movies
        </h2>
        <div className="row_posters1">
          {similarMovie.map((similar, index) => {
            return (
              <Link
                to={`/movie/${
                  similar?.title || similar?.name || similar?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(similar.id)}
                  key={index}
                  className="row_poster1"
                  src={`${imgUrl}${similar.poster_path}`}
                  alt={similar.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FullMovie;
