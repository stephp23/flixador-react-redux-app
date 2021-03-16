import React, { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import TvShows from "./page/TvShows";
import Team from "./page/Team";
import FullMovie from "./components/FullMovie/FullMovie";
import Nav from "./components/Nav/Nav";

function App() {
  const [getMovieId, setGetMovieId] = useState(0);
  console.log(getMovieId);
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home setGetMovieId={setGetMovieId} />
        </Route>
        <Route exact path="/movies">
          <Movies setGetMovieId={setGetMovieId} />
        </Route>
        <Route path="/tvshows"><TvShows setGetMovieId={setGetMovieId}/></Route>
        <Route path="/team" component={Team} />
        <Route exact path="/movie/:title">
          <FullMovie movieId={getMovieId} setGetMovieId={setGetMovieId} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
