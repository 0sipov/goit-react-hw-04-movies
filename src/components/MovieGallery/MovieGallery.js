import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieGallery = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <NavLink to={`movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieGallery;
