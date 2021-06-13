import axios from 'axios';
import costumAxios from 'helpers/axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

export const auth = (user) => axios
  .post('/api/auth/logIn', { ...user });

export const registerApi = (user) => axios
  .post('/api/auth/signUp', {
    lastname: user.lastName,
    firstname: user.firstName,
    password: user.password,
    email: user.email,
  });

export const activateAccountApi = (token) => axios
  .post('/api/auth/confirm', {
    token,
  });

export const checkTokenApi = () => costumAxios
  .get('/api/auth/status');

export const forgotPasswordApi = (email) => axios
  .post('/api/auth/forgot/password', {
    email,
  });

export const resetPasswordApi = ({ password, token, rePassword }) => axios
  .post('/api/auth/reset/password', {
    password,
    token,
    rePassword,
  });

export const addNewPostApi = (image, data) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('data', JSON.stringify(data));
  return costumAxios.post('/api/feed/post', formData);
};

export const getPostsApi = ({ offset, limit, uniId }) => costumAxios.post(`/api/feed/post/${offset}/${limit}`, { universityId: uniId });

export const removePostApi = (postId) => costumAxios.delete(`/api/feed/post/${postId}`);

export const updatePostApi = ({ image, data }) => {
  const formData = new FormData();
  if (image) {
    formData.append('image', image);
  }
  formData.append('data', JSON.stringify(data));
  return costumAxios.put('/api/feed/post', formData);
};

export const getCommentsApi = ({
  offset, limit, postId, parentId,
}) => costumAxios.post(`/api/feed/comment/${offset}/${limit}`, { postId, parentId });

export const addCommentApi = ({ image, data }) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('data', JSON.stringify(data));
  return costumAxios.post('/api/feed/comment', formData);
};

export const removeCommentApi = (commentId) => costumAxios.delete(`/api/feed/comment/${commentId}`);

export const updateCommenApi = ({ image, data }) => {
  const formData = new FormData();
  if (image) {
    formData.append('image', image);
  }
  formData.append('data', JSON.stringify(data));
  return costumAxios.put('/api/feed/comment', formData);
};

export const sendComEmojiApi = ({ commentId, emojiId }) => costumAxios.post('/api/feed/comment/emoji', { commentId, emojiId });
