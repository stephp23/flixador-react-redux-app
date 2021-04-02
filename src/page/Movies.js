import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
import "./Movies.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";

const imgUrl = "https://image.tmdb.org/t/p/original";

const Movies = ({ setGetMovieId, light }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  const [moviesPagesRow1, setMoviesPagesRow1] = useState([]);
  const [moviesPagesRow2, setMoviesPagesRow2] = useState([]);
  const [moviesPagesRow3, setMoviesPagesRow3] = useState([]);
  const [moviesPagesRow4, setMoviesPagesRow4] = useState([]);
  const [moviesPagesRow5, setMoviesPagesRow5] = useState([]);
  const [show, setShow] = useState(true);
  const fetchMoviesPageRow1 = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=28`;
    const response = await axios.get(URL);
    setMoviesPagesRow1(response.data.results);
  };
  const fetchMoviesPageRow2 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=1`;
    const response = await axios.get(URL);
    setMoviesPagesRow2(response.data.results);
  };
  const fetchMoviesPageRow3 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=2`;
    const response = await axios.get(URL);
    setMoviesPagesRow3(response.data.results);
  };
  const fetchMoviesPageRow4 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=3`;
    const response = await axios.get(URL);
    setMoviesPagesRow4(response.data.results);
  };
  const fetchMoviesPageRow5 = async () => {
    let URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=4`;
    const response = await axios.get(URL);
    setMoviesPagesRow5(response.data.results);
  };

  useEffect(() => {
    fetchMoviesPageRow1();
    fetchMoviesPageRow2();
    fetchMoviesPageRow3();
    fetchMoviesPageRow4();
    fetchMoviesPageRow5();
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
            <h2 className={light.checkedA ? "" : "text-light-mood"}>
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
          {moviesPagesRow1.map((moviesPage) => {
            return (
              <Link
                to={`/movie/${
                  moviesPage?.title ||
                  moviesPage?.name ||
                  moviesPage?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(moviesPage.id)}
                  key={moviesPage.id}
                  className="row_poster2"
                  src={`${imgUrl}${moviesPage.poster_path}`}
                  alt={moviesPage.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {moviesPagesRow2.map((moviesPage1) => {
            return (
              <Link to={`/movie/${moviesPage1?.orignal_name}`}>
                <img
                  onClick={() => setGetMovieId(moviesPage1.id)}
                  key={moviesPage1.id}
                  className="row_poster2"
                  src={`${imgUrl}${moviesPage1.poster_path}`}
                  alt={moviesPage1.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {moviesPagesRow3.map((moviesPage2) => {
            return (
              <Link
                to={`/movie/${
                  moviesPage2?.title ||
                  moviesPage2?.name ||
                  moviesPage2?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(moviesPage2.id)}
                  key={moviesPage2.id}
                  className="row_poster2"
                  src={`${imgUrl}${moviesPage2.poster_path}`}
                  alt={moviesPage2.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {moviesPagesRow4.map((moviesPage3) => {
            return (
              <Link
                to={`/movie/${
                  moviesPage3?.title ||
                  moviesPage3?.name ||
                  moviesPage3?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(moviesPage3.id)}
                  key={moviesPage3.id}
                  className="row_poster2"
                  src={`${imgUrl}${moviesPage3.poster_path}`}
                  alt={moviesPage3.name}
                />
              </Link>
            );
          })}
        </div>
        <div className="row_posters2">
          {moviesPagesRow5.map((moviesPage4) => {
            return (
              <Link
                to={`/movie/${
                  (moviesPage4?.title && moviesPage4?.name) ||
                  moviesPage4?.orignal_name
                }`}
              >
                <img
                  onClick={() => setGetMovieId(moviesPage4.id)}
                  key={moviesPage4.id}
                  className="row_poster2"
                  src={`${imgUrl}${moviesPage4.poster_path}`}
                  alt={moviesPage4.name}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
