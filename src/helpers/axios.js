/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
// First we need to import axios.js
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

axios.defaults.baseURL = 'https://ea42ab9a973d.ngrok.io';

export const axiosInstance = axios.create();

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

export const ShowErrors = () => {
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const responseSuccessHandler = (response) => response;

  const responseErrorHandler = (error) => {
    if (error.response && error.response.status === 401) {
      history.push('/user/login');
      enqueueSnackbar('ამ ქმედების განსახორციელებლად საჭიროა ავტორიზაცია', {
        variant: 'error',
      });
    }
    if (error.response && error.response.status === 403) {
      enqueueSnackbar(error.response.data.message, {
        variant: 'error',
      });
      return;
    }
    return Promise.reject(error);
  };

  axiosInstance.interceptors.response.use(
    (response) => responseSuccessHandler(response),
    (error) => responseErrorHandler(error),
  );
};
