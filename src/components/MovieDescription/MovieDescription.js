import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom';
import styles from './MovieDescription.module.css';

const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews" */),
);

class MovieDescription extends Component {
  render() {
    const {
      fullPosterSRC,
      title,
      yearRelease,
      vote_average,
      overview,
      genresString,
      id,
    } = this.props.movieDetails;

    const { reviews, cast, onGoBack, previousPage } = this.props;

    return (
      <>
        <button
          type="button"
          onClick={() => {
            return onGoBack(previousPage);
          }}
        >
          Go back
        </button>
        <h1>Movie description</h1>
        <div className={styles.MovieDescription}>
          <div className={styles.poster}>
            <img src={fullPosterSRC} alt={title} />
          </div>
          {title && (
            <div className={styles.description}>
              <h2>{`${title} (${yearRelease})`}</h2>
              <p>User score: {vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              {genresString}
            </div>
          )}
        </div>
        <ul>
          <li>
            <NavLink to={`/movies/${id}/cast`}>Cast</NavLink>
            <br />
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route
                path={`/movies/${id}/cast`}
                render={() => {
                  return <Cast cast={cast} />;
                }}
              />
            </Suspense>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`}>Reviews</NavLink>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Route
                path={`/movies/${id}/reviews`}
                render={() => {
                  return <Reviews reviews={reviews} />;
                }}
              />
            </Suspense>
          </li>
        </ul>
      </>
    );
  }
}

export default MovieDescription;
