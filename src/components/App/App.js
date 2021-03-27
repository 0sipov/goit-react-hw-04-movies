import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Navigation from '../Navigation';

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
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/" component={HomeView}></Route>
          <Route path="/movies/:movieId" component={MovieDetailsView}></Route>
          <Route path="/movies" component={MoviesView}></Route>
          <Route component={NotFoundView}></Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default App;
