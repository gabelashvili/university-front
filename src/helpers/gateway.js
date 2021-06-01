import axios from 'axios';
import costumAxios from 'helpers/axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

export const auth = (user) => axios
  .post('http://localhost:5000/api/auth/logIn', { ...user });

export const registerApi = (user) => axios
  .post('http://localhost:5000/api/auth/signUp', {
    lastname: user.lastName,
    firstname: user.firstName,
    password: user.password,
    email: user.email,
  });

export const activateAccountApi = (token) => axios
  .post('http://localhost:5000/api/auth/confirm', {
    token,
  });

export const checkTokenApi = () => costumAxios
  .get('http://localhost:5000/api/auth/status');

export const forgotPasswordApi = (email) => axios
  .post('http://localhost:5000/api/auth/forgot/password', {
    email,
  });

export const resetPasswordApi = ({ password, token, rePassword }) => axios
  .post('http://localhost:5000/api/auth/reset/password', {
    password,
    token,
    rePassword,
  });

export const addNewPostApi = (image, data) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('data', JSON.stringify(data));
  return costumAxios.post('http://localhost:5000/api/feed/post', formData);
};

export const getPostsApi = (offset, limit) => {
  const formData = new FormData();
  formData.append('offset', offset);
  formData.append('limit', limit);
  return costumAxios.post('http://localhost:5000/api/feed/post', formData);
};
