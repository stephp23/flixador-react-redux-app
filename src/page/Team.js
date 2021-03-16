import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
import "./Movies.css";
import Stephanie from "./teamImages/stephanie.png";
import Ayman from "./teamImages/ayman.png";
import Katherine from "./teamImages/katherine.png";
import Leesel from "./teamImages/leesel.png";
import Footer from "../components/Footer/Footer";

const Team = () => {
  const [show, setShow] = useState(true);

  const teamMember = [{
    firstName: "Stephanie",
    lastName: "Pena",
    teamTitle: "Front-End Web Developer",
    teamImage: Stephanie
    }, {
    firstName: "Ayman",
    lastName: "Omer",
    teamTitle: "Full-Stack Web Developer",
    teamImage: Ayman
    }, {
    firstName: "Katherine",
    lastName: "Fernandez",
    teamTitle: "Product Designer",
    teamImage: Katherine
    }, {
    firstName: "Leesel",
    lastName: "Fraser",
    teamTitle: "Web Developer",
    teamImage: Leesel
  },
 ]

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
        <div className="teamdiv">
          {teamMember.map((item, index) => {
            return <div key={index}>
              <img className="imageTeammate" src={item.teamImage} alt={item.firstName} />
              <h2 className="teamDescription">{item.firstName} {item.lastName}</h2>
              <h3 className="teamDescription">{item.teamTitle}</h3>
            </div>
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Team;
