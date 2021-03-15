import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Banar.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banar = () => {
  const [banar, setBanar] = useState([]);
  const [banartrailerUrl, setBanarTrailerUrl] = useState("");
  const handelBaner = async () => {
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

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClickMovie = (banar) => {
    if (banartrailerUrl) {
      setBanarTrailerUrl("");
    } else {
      movieTrailer(banar?.name || banar?.name || banar?.orignal_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setBanarTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Temporary Unavailable"));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handelBaner();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
            {banar?.title || banar?.name || banar?.orignal_name}
          </h1>
          <div className="banar-buttons">
            <button
              className="banar-button"
              onClick={() => handleClickMovie(banar)}
            >
              Play
            </button>
          </div>
          <h1 className="banar-description">
            {truncate(banar?.overview, 150)}
          </h1>
        </div>
        <div className="banar-fadeBottom"></div>
      </header>
      {banartrailerUrl && <YouTube videoId={banartrailerUrl} opts={opts} />}
    </>
  );
};

export default Banar;
