import React, { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav/Nav";
import "./Movies.css";
import "../page/Team.css";
import Stephanie from "./teamImages/stephanie.png";
import Ayman from "./teamImages/ayman.png";
import Katherine from "./teamImages/katherine.png";
import Leesel from "./teamImages/leesel.png";
import Footer from "../components/Footer/Footer";

const Team = ({ light }) => {
  const [show, setShow] = useState(true);

  const teamMember = [
    {
      firstName: "Stephanie",
      lastName: "Pena",
      teamTitle: "Front-End Web Developer",
      teamImage: Stephanie,
      linkedin: "https://www.linkedin.com/in/stephanieapena/",
    },
    {
      firstName: "Ayman",
      lastName: "Omer",
      teamTitle: "Full-Stack Web Developer",
      teamImage: Ayman,
      linkedin: "https://www.linkedin.com/in/ayman-omer-b2429b1ab/",
    },
    {
      firstName: "Katherine",
      lastName: "Fernandez",
      teamTitle: "Product Designer",
      teamImage: Katherine,
      linkedin: "https://www.linkedin.com/in/katfernandez22/",
    },
    {
      firstName: "Leesel",
      lastName: "Fraser",
      teamTitle: "Full-Stack Web Developer",
      teamImage: Leesel,
      linkedin: "https://www.linkedin.com/in/leesel/",
    },
  ];

  useEffect(() => {
    const handleScrolling = window.addEventListener("scroll", () => {
      window.scrollY > -20 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);
  return (
    <div className={light.checkedA ? "app" : "light-mood"}>
      <div className={`nav ${show && "nav__black"}`}>
        <Nav />
      </div>
      <div className="teamdiv card flex-box wrapper-flex">
        {teamMember.map((item, index) => {
          return (
            <div key={index}>
              <a href={item.linkedin} target="_blank">
                <img
                  className="imageTeammate"
                  src={item.teamImage}
                  alt={item.firstName}
                />
              </a>
              <h4
                className={
                  light.checkedA ? "teamDescription" : "teamDescription-light"
                }
              >
                {item.firstName} {item.lastName}
              </h4>
              <h6
                className={
                  light.checkedA ? "teamDescription" : "teamDescription-light"
                }
              >
                {item.teamTitle}
              </h6>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Team;
