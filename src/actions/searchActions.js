import { SEARCH_MOVIE } from "./type";
import { FETCH_MOVIES } from "./type";
import axios from "axios";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => async (dispatch) => {
  await axios
    .get(
      `https://api.themoviedb.org/3/search/movie?query=${text}&api_key=${process.env.REACT_APP_APIKEY}`
    )

    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.results,
      })
    )
    .catch((err) => console.log(err));
};
