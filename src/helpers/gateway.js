import axios from 'axios';

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
