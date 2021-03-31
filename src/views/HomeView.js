import React, { Component } from 'react';
import PopularMovies from '../components/PopularMovies';
import { queryPopularMovies } from '../utilites/queries';

class HomeView extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    try {
      const responsePopularMovies = await queryPopularMovies();
      this.setState({ popularMovies: responsePopularMovies.data.results });
    } catch (err) {
      alert('Oops... Something went wrong. Try later.');
    }
  }

  render() {
    return (
      <PopularMovies
        popularMovies={this.state.popularMovies}
        cast={this.state.cast}
        reviews={this.state.reviews}
      />
    );
  }
}

export default HomeView;
