import React, { lazy } from 'react';
import { Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('../../views/MoviesView' /* webpackChunkName: "MoviesView" */),
);
const MovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */
  ),
);
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView' /* webpackChunkName: "NotFoundView" */),
);

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={HomeView}></Route>
        <Route path="/movies/:movieId" component={MovieDetailsView}></Route>
        <Route path="/movies" component={MoviesView}></Route>
        <Route component={NotFoundView}></Route>
      </Switch>
    </>
  );
};

export default App;
