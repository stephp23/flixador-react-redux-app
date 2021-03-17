import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import logo from "./img/logo.png";
import Search from "./Search/Search";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScrolling = window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setShow(true) : setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="div-header">
        <Link to="/">
          <div className="div-logo">
            <img className="nav__logo" src={logo} alt="Flixador" />
          </div>
        </Link>
        <div className="div-search">
          <Search />
        </div>
        <div className="div-link">
          <h4 className="router-headr">
            <Link to="/movies">Movies</Link>
          </h4>
          <h4 className="router-headr">
            {" "}
            <Link to="/tvshows">TV Shows</Link>
          </h4>
          <h4 className="router-headr">
            <Link to="/team">Team</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Nav;
