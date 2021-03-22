import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const APIKey = '19872241-52e2ff9de1363a0f3b5becb90';

const getImgs = (query, page, perPage) => {
  return axios({
    method: 'get',
    url: `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${perPage}&key=${APIKey}`,
  });
};

export default getImgs;
