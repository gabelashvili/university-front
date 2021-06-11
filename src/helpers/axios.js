/* eslint-disable no-param-reassign */
// First we need to import axios.js
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
const axiosInstance = axios.create();
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

export default axiosInstance;
