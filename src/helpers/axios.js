/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// First we need to import axios.js
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:5000' });
axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem('authedUser')) || '';
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const responseSuccessHandler = (response) => response;

const responseErrorHandler = (error) => {
  if (error.response && error.response.status === 401) {
    window.location.replace('/user/login');
  }
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  (response) => responseSuccessHandler(response),
  (error) => responseErrorHandler(error),
);

export default axiosInstance;
