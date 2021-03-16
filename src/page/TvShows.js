import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
// import "./Movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const imgUrl = "https://image.tmdb.org/t/p/original";

const TvShows = ({ setGetMovieId }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  const [TVShowsPagesRow1, setTVShowsPagesRow1] = useState([]);
  const [TVShowsPagesRow2, setTVShowsPagesRow2] = useState([]);
  const [TVShowsPagesRow3, setTVShowsPagesRow3] = useState([]);
  const [TVShowsPagesRow4, setTVShowsPagesRow4] = useState([]);
  const [TVShowsPagesRow5, setTVShowsPagesRow5] = useState([]);
  const [show, setShow] = useState(true);
  const fetchTVShowsPagesRow1 = async () => {
    
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTVShowsPagesRow1(response.data.results);
  };
  const fetchTVShowsPagesRow2 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=2&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTVShowsPagesRow2(response.data.results);
  };
  const fetchTVShowsPagesRow3 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=3&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTVShowsPagesRow3(response.data.results);
  };
  const fetchTVShowsPagesRow4 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=4&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTVShowsPagesRow4(response.data.results);
  };
  const fetchTVShowsPagesRow5 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&sort_by=popularity.desc&page=5&timezone=America%2FNew_York&include_null_first_air_dates=false`;
    const response = await axios.get(URL);
    setTVShowsPagesRow5(response.data.results);
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
    <div className="app">
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
          {TVShowsPagesRow1.map((TVShowPage1) => {
            return (
              <Link
                to={`/movie/${
                  TVShowPage1?.title ||
                  TVShowPage1?.name ||
                  TVShowPage1?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(TVShowPage1.id)}
                  key={TVShowPage1.id}
                  className="row_poster2"
                  src={`${imgUrl}${TVShowPage1.poster_path}`}
                  alt={TVShowPage1.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {TVShowsPagesRow2.map((TVShowPage2) => {
            return (
              <Link to={`/movie/${TVShowPage2?.orignal_name}`}>
                <img
                  onClick={() => setGetMovieId(TVShowPage2.id)}
                  key={TVShowPage2.id}
                  className="row_poster2"
                  src={`${imgUrl}${TVShowPage2.poster_path}`}
                  alt={TVShowPage2.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {TVShowsPagesRow3.map((TVShowPage3) => {
            return (
              <Link
                to={`/movie/${
                  TVShowPage3?.title ||
                  TVShowPage3?.name ||
                  TVShowPage3?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(TVShowPage3.id)}
                  key={TVShowPage3.id}
                  className="row_poster2"
                  src={`${imgUrl}${TVShowPage3.poster_path}`}
                  alt={TVShowPage3.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {TVShowsPagesRow4.map((TVShowPage4) => {
            return (
              <Link
                to={`/movie/${
                  TVShowPage4?.title ||
                  TVShowPage4?.name ||
                  TVShowPage4?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(TVShowPage4.id)}
                  key={TVShowPage4.id}
                  className="row_poster2"
                  src={`${imgUrl}${TVShowPage4.poster_path}`}
                  alt={TVShowPage4.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {TVShowsPagesRow5.map((TVShowPage5) => {
            return (
              <Link
                to={`/movie/${
                  (TVShowPage5?.title && TVShowPage5?.name) ||
                  TVShowPage5?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(TVShowPage5.id)}
                  key={TVShowPage5.id}
                  className="row_poster2"
                  src={`${imgUrl}${TVShowPage5.poster_path}`}
                  alt={TVShowPage5.name}
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

