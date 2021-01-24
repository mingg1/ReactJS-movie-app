import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, genres, rating, runtime, poster, summary }) {
  return <h1>{title}</h1>;
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
export default Movie;
