import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ChildrenFamily.css";

const imgUrl = "https://image.tmdb.org/t/p/original";
const ChildrenFamily = () => {
  const [children, setChildren] = useState([]);
  const [getMovieId, setGetMovieId] = useState(0);
  const fetchChildrenFamily = async () => {
    let URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_APIKEY}&with_genres=10749`;
    let response = await axios.get(URL);
    setChildren(response.data.results);
  };
  useEffect(() => {
    fetchChildrenFamily();
  }, []);
  return (
    <div className="row">
      <h2>Children & Family</h2>
      <div className="row_posters">
        {children.map((familyMovies) => {
          return (
            <img
              onClick={() => setGetMovieId(familyMovies.id)}
              key={familyMovies.id}
              className="row_poster"
              src={`${imgUrl}${familyMovies.poster_path}`}
              alt={familyMovies.name}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ChildrenFamily;