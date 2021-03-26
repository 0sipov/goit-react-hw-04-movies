import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.props.movieId}/credits?api_key=5e053c5e248d64400c2519d2136543a4&language=en-US`,
    );
    this.setState({ cast: response.data.cast.slice(0, 5) });
    console.log(response.data.cast);
  }

  getPosterFullSRC = path => `https://image.tmdb.org/t/p/w500/${path}`;

  render() {
    return (
      <ul>
        {this.state.cast.map(actor => {
          return (
            <li key={actor.id}>
              <img
                src={this.getPosterFullSRC(actor.profile_path)}
                alt={actor.name}
                width="150"
              />
              <p>{actor.name}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cast;
