import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./SearchStyle";
import { searchMovie, fetchMovies } from "../../../actions/searchActions";
import { connect, useSelector, useDispatch } from "react-redux";

const Search = ({ searchMovie, fetchMovies }) => {
  const classes = useStyles();

  const { movies } = useSelector((state) => state.movies);
  const text = useSelector((state) => state.movies.text);
  console.log(text);
  console.log(movies);
  const handleChange = (e) => {
    searchMovie(e.target.value);
  };
  const handleButton = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchMovies(text);
    }
  };

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          onChange={handleChange}
          onKeyPress={handleButton}
        />
      </div>
    </>
  );
};
const mapState = (state) => ({
  text: state.movies.text,
});

export default connect(mapState, { searchMovie, fetchMovies })(Search);
