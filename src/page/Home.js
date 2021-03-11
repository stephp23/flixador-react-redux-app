import React from "react";
import "../App.css";
import NewReleases from "../components/NewReleases/NewReleases";
import ActionAdventure from "../components/ActionAdventure/ActionAdventure";
import ScifiHorror from "../components/ScifiHorror/ScifiHorror";

const Home = () => {
  return (
    <div className="app">
      <NewReleases />
      <ActionAdventure />
      <ScifiHorror />
    </div>
  );
};

export default Home;
