import axios from 'axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
export const auth = (user) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${user}`);
