import React, { Component } from 'react';
import MovieDescription from '../components/MovieDescription';
import { queryMovieById } from '../utilites/queries';
import { queryCast } from '../utilites/queries';
import { queryReviews } from '../utilites/queries';

class MovieDetailsView extends Component {
  state = {
    movieDetails: {},
    cast: [],
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const responseMovieById = await queryMovieById(movieId);
    const responseReviews = await queryReviews(movieId);
    const responseCast = await queryCast(movieId);

    const { getYearRelease, getGenresString, getPosterFullSRC } = this;
    const { data } = responseMovieById;
    const yearRelease = getYearRelease(data.release_date);
    const genresString = getGenresString(data.genres);
    const fullPosterSRC = getPosterFullSRC(data.poster_path);

    this.setState({
      movieDetails: {
        ...data,
        yearRelease,
        fullPosterSRC,
        genresString,
      },
      reviews: responseReviews.data.results,
      cast: responseCast.data.cast.slice(0, 5),
    });
  }

  getYearRelease = dateRelease => dateRelease.slice(0, 4);

  getPosterFullSRC = path => `https://image.tmdb.org/t/p/w500/${path}`;

  getGenresString = genres => genres.map(el => el.name).join(', ');

  render() {
    return (
      <>
        <button
          type="button"
          onClick={() => this.props.history.push('/movies')}
        >
          Go back
        </button>
        <MovieDescription
          movieDetails={this.state.movieDetails}
          reviews={this.state.reviews}
          cast={this.state.cast}
        />
      </>
    );
  }
}

export default MovieDetailsView;
