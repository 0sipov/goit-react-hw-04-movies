import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
const APIKey = '5e053c5e248d64400c2519d2136543a4';

const queryMovieById = id => {
  console.log();
  return axios({
    method: 'get',
    url: `/${id}?api_key=${APIKey}&language=en-US`,
  });
};

export default queryMovieById;
