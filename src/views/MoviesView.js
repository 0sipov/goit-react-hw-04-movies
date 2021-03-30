import React, { Component } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGallery from '../components/MovieGallery';
import { queryMovieByName } from '../utilites/queries';

class MoviesView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    if (this.props.location.search) {
      this.handleSubmit(this.props.location.search.slice(7));
    }
  }

  handleSubmit = async query => {
    if (query === '') {
      alert('Enter your query');
      return;
    }
    const response = await queryMovieByName(query);
    this.setState({ movies: response.data.results });
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        <MovieGallery movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesView;
