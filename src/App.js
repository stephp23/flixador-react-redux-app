import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import TvShows from "./page/TvShows";
import Team from "./page/Team";

import FullMovie from "./components/FullMovie/FullMovie";
import FullTvShow from "./components/FullTvShow/FullTvShow";

import Nav from "./components/Nav/Nav";

function App() {
  const [getMovieId, setGetMovieId] = useState(0);
  const [getTvShowId, setGetTvShowId] = useState(0);
  const [light, setLight] = useState({ checkedA: true });
  const handleDarkLight = (event) => {
    setLight({ ...light, [event.target.name]: event.target.checked });
  };

  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home
            setGetMovieId={setGetMovieId}
            handleDarkLight={handleDarkLight}
            light={light}
          />
        </Route>
        <Route exact path="/movies">
          <Movies
            setGetMovieId={setGetMovieId}
            handleDarkLight={handleDarkLight}
            light={light}
          />
        </Route>
        <Route exact path="/tvshows">
          <TvShows light={light} setGetTvShowId={setGetTvShowId} />
        </Route>
        <Route path="/team">
          <Team light={light} />
        </Route>
        <Route exact path="/movie/:title">
          <FullMovie
            movieId={getMovieId}
            setGetMovieId={setGetMovieId}
            handleDarkLight={handleDarkLight}
            light={light}
          />
        </Route>
        <Route exact path="/tvshow/:title">
          <FullTvShow
            getTvShowId={getTvShowId}
            setGetMovieId={setGetMovieId}
            handleDarkLight={handleDarkLight}
            light={light}
            setGetTvShowId={setGetTvShowId}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
