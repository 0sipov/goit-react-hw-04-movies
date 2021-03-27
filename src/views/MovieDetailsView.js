import React from 'react';
import MovieDescription from '../components/MovieDescription';

const MovieDetailsView = props => {
  return <MovieDescription movieId={props.match.params.movieId} />;
};

export default MovieDetailsView;
