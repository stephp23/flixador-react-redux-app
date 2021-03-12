import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banar.css";

const Banar = () => {
  const [banar, setBanar] = useState([]);
  const handelBaner = async () => {
    let API_KEY = "db4b083428c5e3032dba92c507c8e1cc";
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_APIKEY}&with_networks=213`
    );

    setBanar(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]
    );
    return response;
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handelBaner();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header
      className="banar"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${banar?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banar-info">
        <h1 className="banar-title">
          {banar?.title || banar.name || banar?.orignal_name}
        </h1>
        <div className="banar-buttons">
          <button className="banar-button">Play</button>
        </div>
        <h1 className="banar-description">{truncate(banar?.overview, 150)}</h1>
      </div>
      <div className="banar-fadeBottom"></div>
    </header>
  );
};

export default Banar;
