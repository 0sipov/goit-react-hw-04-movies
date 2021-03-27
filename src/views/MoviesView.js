import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGallery from '../components/MovieGallery';
import { queryMovieByName } from '../utilites/queries';

class MoviesView extends Component {
  state = {
    movies: [],
  };

  handleSubmit = async query => {
    const response = await queryMovieByName(query);
    this.setState({ movies: response.data.results });
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MovieGallery movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesView;
