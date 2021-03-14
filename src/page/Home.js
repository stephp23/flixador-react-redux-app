import React from "react";
import "../App.css";
import NewReleases from "../components/NewReleases/NewReleases";
import ActionAdventure from "../components/ActionAdventure/ActionAdventure";
import ScifiHorror from "../components/ScifiHorror/ScifiHorror";
import Footer from "../components/Footer/Footer";
import Banar from "../components/Banar/Banar";
import ChildrenFamily from "../components/ChildrenFamily/ChildrenFamily";

const Home = () => {
  return (
    <div className="app">
      <Banar />
      <NewReleases />
      <ActionAdventure />
      <ScifiHorror />
      <ChildrenFamily />
      <Footer />
    </div>
  );
};

export default Home;
