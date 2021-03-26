import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MoviesView extends Component {
  state = {
    query: '',
    films: [],
  };

  handleChange = event => {
    return this.setState({ query: event.target.value });
  };

  handleSubmit = async event => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${this.state.query}&api_key=5e053c5e248d64400c2519d2136543a4&language=en-US`,
    );
    this.setState({ films: response.data.results });
    console.log(this.state.films);
  };

  render() {
    return (
      <>
        <h1>Search movie</h1>
        <form
          onSubmit={event => {
            event.preventDefault();
            this.handleSubmit();
          }}
        >
          <input type="text" onChange={this.handleChange} />
          <button type="submit">Search</button>
        </form>
        <ul>
          {this.state.films.map(el => {
            return (
              <li key={el.id}>
                <NavLink to={`movies/${el.id}`}>{el.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default MoviesView;
