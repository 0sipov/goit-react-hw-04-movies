import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const APIKey = '5e053c5e248d64400c2519d2136543a4';

const queryMovieById = id => {
  return axios({
    method: 'get',
    url: `/movie/${id}?api_key=${APIKey}`,
  });
};

const queryPopularMovies = () => {
  return axios({
    method: 'get',
    url: `/trending/movie/day?api_key=${APIKey}`,
  });
};

const queryMovieByName = movie => {
  return axios({
    method: 'get',
    url: `/search/movie?query=${movie}&api_key=${APIKey}`,
  });
};

const queryCast = movieId => {
  return axios({
    method: 'get',
    url: `/movie/${movieId}/credits?api_key=${APIKey}`,
  });
};

const queryReviews = movieId => {
  return axios({
    method: 'get',
    url: `/movie/${movieId}/reviews?api_key=${APIKey}&page=1`,
  });
};

axios.get(`https://api.themoviedb.org/3`);

export {
  queryMovieByName,
  queryMovieById,
  queryPopularMovies,
  queryCast,
  queryReviews,
};
