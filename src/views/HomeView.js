import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class HomeView extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const response = await axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=5e053c5e248d64400c2519d2136543a4',
      )
      .then(r => {
        return r;
      });
    // console.log(response.data.results);
    this.setState({ movies: response.data.results });
  }

  render() {
    return (
      <>
        <h1>Popular movies</h1>
        <ul>
          {this.state.movies.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default HomeView;
