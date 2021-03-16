import React, { useState } from "react";
import "../App.css";
import NewReleases from "../components/NewReleases/NewReleases";
import ActionAdventure from "../components/ActionAdventure/ActionAdventure";
import ScifiHorror from "../components/ScifiHorror/ScifiHorror";
import Footer from "../components/Footer/Footer";
import Banar from "../components/Banar/Banar";
import ChildrenFamily from "../components/ChildrenFamily/ChildrenFamily";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import Comedies from "../components/Comedy/Comedy";

const imgUrl = "https://image.tmdb.org/t/p/original";
const Home = ({ setGetMovieId, light, handleDarkLight }) => {
  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);

  return (
    <div className={light.checkedA ? "app" : "light-mood"}>
      <Banar />
      <Switch
        checked={light.checkedA}
        onChange={handleDarkLight}
        name="checkedA"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

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


      <NewReleases light={light} setGetMovieId={setGetMovieId} />
      <ActionAdventure light={light} setGetMovieId={setGetMovieId} />
      <ScifiHorror light={light} setGetMovieId={setGetMovieId} />
      <ChildrenFamily light={light} setGetMovieId={setGetMovieId} />
      <Footer light={light} />

    </div>
  );
};

export default Home;
