import axios from 'axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
