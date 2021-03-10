import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import Movies from "./page/Movies";
import TvShows from "./page/TvShows";
import Team from "./page/Team";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows" component={TvShows} />
        <Route path="/team" component={Team} />
      </Switch>
    </div>
  );
}

export default App;
