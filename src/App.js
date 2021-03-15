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

  // const handleLink = () => {
  //   getMovieId < 0 ? <Link to={`/movie/${getMovieId}`} /> : <Link to="/" />;
  // };
  // useEffect(() => {
  //   handleLink();
  // }, []);

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
        <Route path="/tvshows" component={TvShows} />
        <Route path="/team" component={Team} />
        <Route exact path="/movie/:title" component={FullMovie} />
      </Switch>
    </div>
  );
}

export default App;
