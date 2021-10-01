import axios from 'axios';
import { axiosInstance } from 'helpers/axios';

export const getTodo = (todoId) => axios
  .get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);

export const auth = (user) => axios
  .post('/api/auth/logIn', { ...user });

export const registerApi = (user) => axios
  .post('/api/auth/signUp', {
    lastName: user.lastName,
    firstName: user.firstName,
    password: user.password,
    email: user.email,
  });

export const activateAccountApi = (token) => axios
  .post('/api/auth/confirm', {
    token,
  });

export const checkTokenApi = () => axiosInstance
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
  return axiosInstance.post('/api/feed/post', formData);
};

export const getPostsApi = ({ offset, limit, uniId }) => axiosInstance.post(`/api/feed/post/${offset}/${limit}`, { universityId: uniId });

export const removePostApi = (postId) => axiosInstance.delete(`/api/feed/post/${postId}`);

export const updatePostApi = ({ image, data }) => {
  const formData = new FormData();
  if (image) {
    formData.append('image', image);
  }
  formData.append('data', JSON.stringify(data));
  return axiosInstance.put('/api/feed/post', formData);
};

export const getCommentsApi = ({
  offset, limit, postId, parentId,
}) => axiosInstance.post(`/api/feed/comment/${offset}/${limit}`, { postId, parentId });

export const addCommentApi = ({ image, data }) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('data', JSON.stringify(data));
  return axiosInstance.post('/api/feed/comment', formData);
};

export const removeCommentApi = (commentId) => axiosInstance.delete(`/api/feed/comment/${commentId}`);

export const updateCommenApi = ({ image, data }) => {
  const formData = new FormData();
  if (image) {
    formData.append('image', image);
  }
  formData.append('data', JSON.stringify(data));
  return axiosInstance.put('/api/feed/comment', formData);
};

export const sendComEmojiApi = ({ commentId, emojiId }) => axiosInstance.post('/api/feed/comment/emoji', { commentId, emojiId });

export const sendPostEmojiApi = ({ postId, emojiId }) => axiosInstance.post('/api/feed/post/emoji', { postId, emojiId });

export const getUniListApi = ({ offset, limit }) => axiosInstance.get(`/api/university/${offset}/${limit}`);

export const getFilteredUniListApi = ({ university, location }) => axiosInstance.post('/api/university/filter', { university, location });

export const getUserApi = (id) => axiosInstance.get('/api/user', { id });

export const updateUserDataApi = ({ data, image }) => {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('data', JSON.stringify({
    firstName: data.firstName,
    lastName: data.lastName,
    facebook: data.facebook,
    image: data.image,
  }));
  return axiosInstance.put('/api/user', formData);
};

export const changePasswordApi = ({ password, newPassword, reNewPassword }) => axiosInstance.put('/api/user/password', {
  password,
  newPassword,
  reNewPassword,
});

export const getPostReactionApi = ({
  offset, limit, postId, emojiId,
}) => axiosInstance.post(`/api/feed/post/emoji/${offset}/${limit}`, { postId, emojiId });

export const getUniInfoApi = (uniId) => axiosInstance.get(`/api/university/detail/${uniId}`);

export const getFacultiesApi = (uniId) => axiosInstance.post('/api/faculty/0/500', { universityId: uniId });

export const getGrantsDetailsApi = (facultyId) => axiosInstance.get(`/api/faculty/grants/${facultyId}`);

export const updateUniRateApi = ({ universityId, rateNumber }) => axiosInstance.put('/api/university/update-rate/', { universityId, rateNumber });

export const getLecturesApi = ({
  offset, limit, universityId, facultyId,
}) => axiosInstance.post(`/api/lecturer/${offset}/${limit}`, { universityId, facultyId });

export const filterRecturersApi = ({
  offset, limit, fullName,
}) => axiosInstance.post(`/api/lecturer/filter/${offset}/${limit}`, { fullName });

export const addCommentLectureApi = (data) => axiosInstance.post('/api/lecturer/comment', {
  text: data.text,
  lecturerId: data.lecturerId,
  isPrivate: data.isPrivate,
});

export const getLecturerCommentsApi = ({
  offset, limit, lecturerId,
}) => axiosInstance.post(`/api/lecturer/comment/${offset}/${limit}`, { lecturerId });

export const removeCommentLectureApi = (comId) => axiosInstance.delete(`/api/lecturer/comment/${comId}`);

export const updateCommentLectureApi = ({ text, isPrivate, commentId }) => axiosInstance.put(`/api/lecturer/comment/${commentId}`, { text, isPrivate });

export const updateRateLectureApi = ({ lecturerId, rateNumber }) => axiosInstance.post('/api/lecturer/update-rate', { lecturerId, rateNumber });
