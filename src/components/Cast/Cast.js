import React, { Component } from 'react';

class Cast extends Component {
  getPosterFullSRC = path => `https://image.tmdb.org/t/p/w500/${path}`;

  render() {
    return (
      <ul>
        {this.props.cast.map(actor => {
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
