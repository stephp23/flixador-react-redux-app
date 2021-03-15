import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ChildrenFamily.css";

const imgUrl = "https://image.tmdb.org/t/p/original";
const ChildrenFamily = ({ setGetMovieId }) => {
  const [children, setChildren] = useState([]);
  const fetchChildrenFamily = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=10749`;
    let response = await axios.get(URL);
    setChildren(response.data.results);
  };
  useEffect(() => {
    fetchChildrenFamily();
  }, []);
  return (
    <div className="row1">
      <h2>Children & Family</h2>
      <div className="row_posters1">
        {children.map((familyMovies) => {
          return (
            <Link
              to={`/movie/${
                familyMovies?.title ||
                familyMovies?.name ||
                familyMovies?.orignal_name
              }`}
            >
              <img
                onClick={() => setGetMovieId(familyMovies.id)}
                key={familyMovies.id}
                className="row_poster1"
                src={`${imgUrl}${familyMovies.poster_path}`}
                alt={familyMovies.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ChildrenFamily;
