import React, { Component } from 'react';
import Cast from '../Cast';
import Reviews from '../Reviews';
import { NavLink, Route } from 'react-router-dom';
import { queryMovieById } from '../../utilites/queries';
import styles from './MovieDescription.module.css';

class MovieDescription extends Component {
  state = {
    movieDetails: {},
  };

  async componentDidMount() {
    const response = await queryMovieById(this.props.movieId);
    const { getYearRelease, getGenresString, getPosterFullSRC } = this;
    const { data } = response;
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
    });
    console.log(response);
  }

  getYearRelease = dateRelease => dateRelease.slice(0, 4);

  getPosterFullSRC = path => `https://image.tmdb.org/t/p/w500/${path}`;

  getGenresString = genres => genres.map(el => el.name).join(', ');

  render() {
    const {
      fullPosterSRC,
      title,
      yearRelease,
      vote_average,
      overview,
      genresString,
      id,
    } = this.state.movieDetails;

    return (
      <>
        <h1>Movie description</h1>
        <div className={styles.MovieDescription}>
          <div className={styles.poster}>
            <img src={fullPosterSRC} alt={title} />
          </div>
          <div className={styles.description}>
            <h2>{`${title} (${yearRelease})`}</h2>
            <p>User score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genresString}
          </div>
        </div>
        <ul>
          <li>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
            <br />
            <Route
              path={`/movies/${id}/cast`}
              render={() => {
                return <Cast movieId={id} />;
              }}
            />
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
            <Route
              path={`/movies/${id}/reviews`}
              render={() => {
                return <Reviews movieId={id} />;
              }}
            />
          </li>
        </ul>
      </>
    );
  }
}

export default MovieDescription;
