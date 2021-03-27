import React, { Component } from 'react';
import MovieGallery from '../MovieGallery';
import { queryPopularMovies } from '../../utilites/queries';

class PopularMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await queryPopularMovies();
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Popular movies</h1>
        <MovieGallery movies={this.state.movies} />
      </>
    );
  }
}

export default PopularMovies;
