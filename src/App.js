import React from "react";
import axios from "axios";
import Movie from "./movies";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  displayMovies = (movie) => {
    return <Movie key={movie.id} title={movie.title} summary={movie.title} year={movie.year} rating={movie.rating} runtime={movie.runtime} poster={movie.small_cover_image} genres={movie.genres} />;
  };

  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : movies.map(this.displayMovies)}</div>;
  }
}

export default App;
