import React, { Component } from 'react';
import MovieGallery from '../MovieGallery';

class PopularMovies extends Component {
  render() {
    return (
      <>
        <h1>Popular movies</h1>
        <MovieGallery movies={this.props.popularMovies} />
      </>
    );
  }
}

export default PopularMovies;
