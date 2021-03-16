import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
// import "./FullMovie.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/original";
const FullTvShow = ({ setGetMovieId, getTvShowId, setGetTvShowId }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  const [fullTvShowBanar, setFullTvShowBanar] = useState([]);
  const [similarTvShow, setSimilarTvShow] = useState([]);
  const [fulltrailerUrl, setfullTrailerUrl] = useState("");

  const fetchFullTvShow = async () => {
    let URL = `https://api.themoviedb.org/3/tv/${getTvShowId}?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
    const response = await axios.get(URL);
    setFullTvShowBanar(response.data);
  };

  const fetchSimilarTv = async () => {
    let urlSimilar = `https://api.themoviedb.org/3/tv/${getTvShowId}/similar?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;
    const response = await axios.get(urlSimilar);
    setSimilarTvShow(response.data.results);
  };

  useEffect(() => {
    fetchSimilarTv();
  }, [fullTvShowBanar]);

  useEffect(() => {
    fetchFullTvShow();
  }, [fullTvShowBanar]);

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
  const handleClickMovie = (fullTvShowBanar) => {
    if (fulltrailerUrl) {
      setfullTrailerUrl("");
    } else {
      movieTrailer(
        fullTvShowBanar?.name ||
          fullTvShowBanar?.title ||
          fullTvShowBanar?.orignal_name ||
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
    <div className="app">
      <>
        <header
          className="banar"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original${fullTvShowBanar?.backdrop_path}")`,
            backgroundPosition: "center center",
          }}
        >
          <div className="banar-info">
            <h1 className="banar-title">
              {fullTvShowBanar?.title ||
                fullTvShowBanar?.name ||
                fullTvShowBanar?.orignal_name}
            </h1>
            <div className="banar-buttons">
              <button
                className="banar-button"
                onClick={() => handleClickMovie(fullTvShowBanar)}
              >
                Play
              </button>
            </div>
            <h1 className="banar-description">
              {truncate(fullTvShowBanar?.overview, 150)}
            </h1>
          </div>
          <div className="banar-fadeBottom"></div>
        </header>
        {movies ? (
          <div className="row1">
            <h2>{text ? `what you looking for : ${text}` : ""}</h2>
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
      <div className="full-movie-dea">
        <Typography variant="h3">{fullTvShowBanar.original_title}</Typography>
        <div className="date-runtime">
          <Typography variant="h5">{fullTvShowBanar.release_date}</Typography>
        </div>
        <div className="date-runtime">
          <Typography variant="h5">
            Run Time : {fullTvShowBanar.runtime} min
          </Typography>
        </div>
      </div>
      <div className="full-movie-det">
        <Typography variant="h6">{fullTvShowBanar.overview}</Typography>
      </div>
      <div className="row1">
        <h2>Similar TV Shows</h2>
        <div className="row_posters1">
          {similarTvShow.map((similar, index) => {
            return (
              <Link
                to={`/tvshow/${
                  similar?.title || similar?.name || similar?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetTvShowId(similar.id)}
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

export default FullTvShow;
