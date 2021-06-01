/* eslint-disable no-param-reassign */
// First we need to import axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = JSON.parse(localStorage.getItem('authedUser'));
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Also add/ configure interceptors && all the other cool stuff

export default axiosInstance;
