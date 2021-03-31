import axios from 'axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
export const auth = (user) => axios
  .post('http://localhost:5000/api/auth/logIn', { ...user });
