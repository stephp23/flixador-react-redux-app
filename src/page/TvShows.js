import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
// import "./Movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const imgUrl = "https://image.tmdb.org/t/p/original";

const TvShows = ({ setGetTvShowId, setGetMovieId, light }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  const [tvShowsPagesRow1, setTvShowsPagesRow1] = useState([]);
  const [tvShowsPagesRow2, setTvShowsPagesRow2] = useState([]);
  const [tvShowsPagesRow3, setTvShowsPagesRow3] = useState([]);
  const [tvShowsPagesRow4, setTvShowsPagesRow4] = useState([]);
  const [tvShowsPagesRow5, setTvShowsPagesRow5] = useState([]);
  const [show, setShow] = useState(true);
  const fetchTVShowsPagesRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow1(response.data.results);
  };
  const fetchTVShowsPagesRow2 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow2(response.data.results);
  };
  const fetchTVShowsPagesRow3 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=3&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow3(response.data.results);
  };
  const fetchTVShowsPagesRow4 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=4&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow4(response.data.results);
  };
  const fetchTVShowsPagesRow5 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=5&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTvShowsPagesRow5(response.data.results);
  };

  useEffect(() => {
    fetchTVShowsPagesRow1();
    fetchTVShowsPagesRow2();
    fetchTVShowsPagesRow3();
    fetchTVShowsPagesRow4();
    fetchTVShowsPagesRow5();
  }, []);
  useEffect(() => {
    const handleScrolling = window.addEventListener("scroll", () => {
      window.scrollY > -20 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div className={light.checkedA ? "app" : "light-mood"}>
      <div className={`nav ${show && "nav__black"}`}>
        <Nav />
      </div>
      <div className="row-movie">
        {movies ? (
          <div className="row2">
            <h2 className="text-search-movie">
              {text ? `what you looking for : ${text}` : ""}
            </h2>
            <div className="row_posters2">
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
                      className="row_poster2"
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
        <div className="row_posters2">
          {tvShowsPagesRow1.map((tvShowPage1) => {
            return (
              <Link
                to={`/tvshow/${
                  tvShowPage1?.title ||
                  tvShowPage1?.name ||
                  tvShowPage1?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetTvShowId(tvShowPage1.id)}
                  key={tvShowPage1.id}
                  className="row_poster2"
                  src={`${imgUrl}${tvShowPage1.poster_path}`}
                  alt={tvShowPage1.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {tvShowsPagesRow2.map((tvShowPage2) => {
            return (
              <Link to={`/tvshow/${tvShowPage2?.orignal_name}`}>
                <img
                  onClick={() => setGetTvShowId(tvShowPage2.id)}
                  key={tvShowPage2.id}
                  className="row_poster2"
                  src={`${imgUrl}${tvShowPage2.poster_path}`}
                  alt={tvShowPage2.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {tvShowsPagesRow3.map((tvShowPage3) => {
            return (
              <Link
                to={`/tvshow/${
                  tvShowPage3?.title ||
                  tvShowPage3?.name ||
                  tvShowPage3?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetTvShowId(tvShowPage3.id)}
                  key={tvShowPage3.id}
                  className="row_poster2"
                  src={`${imgUrl}${tvShowPage3.poster_path}`}
                  alt={tvShowPage3.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {tvShowsPagesRow4.map((tvShowPage4) => {
            return (
              <Link
                to={`/tvshow/${
                  tvShowPage4?.title ||
                  tvShowPage4?.name ||
                  tvShowPage4?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetTvShowId(tvShowPage4.id)}
                  key={tvShowPage4.id}
                  className="row_poster2"
                  src={`${imgUrl}${tvShowPage4.poster_path}`}
                  alt={tvShowPage4.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {tvShowsPagesRow5.map((tvShowPage5) => {
            return (
              <Link
                to={`/tvshow/${
                  (tvShowPage5?.title && tvShowPage5?.name) ||
                  tvShowPage5?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetTvShowId(tvShowPage5.id)}
                  key={tvShowPage5.id}
                  className="row_poster2"
                  src={`${imgUrl}${tvShowPage5.poster_path}`}
                  alt={tvShowPage5.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TvShows;
