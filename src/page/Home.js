import React from "react";
import "../App.css";
import NewReleases from "../components/NewReleases/NewReleases";
import ActionAdventure from "../components/ActionAdventure/ActionAdventure";

const Home = () => {
  return (
    <div className="app">
      <NewReleases />
      <ActionAdventure />
    </div>
  );
};

export default Home;
