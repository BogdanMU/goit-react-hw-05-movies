import axios from 'axios';

const API_KEY = '709abf24a0faef9bf82bc0dd6f21c4f4';
const lang = 'en-US';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: lang,
};

export const getTrendingMovies = async () => {
  const response = await axios.get('/trending/movie/week');
  return response.data;
};

export const getMovieByID = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const getMovieCast = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`);
  return response.data.results;
};

export const getMovies = async query => {
  const response = await axios.get(`/search/movie?query=${query}`);
  return response.data.results;
};
