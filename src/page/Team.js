import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
import "./Movies.css";

const Team = () => {
  const [show, setShow] = useState(true);

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
    </div>
  );
};

export default Team;
