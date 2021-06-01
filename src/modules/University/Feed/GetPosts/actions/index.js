import { constants } from 'modules/University/Feed/GetPosts';

export const getPosts = ({
  request: (image, data) => ({
    type: constants.GET_POSTS_REQUESTED,
    payload: {
      image,
      data,
    },
  }),
  succeed: (response) => ({
    type: constants.GET_POSTS_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_POSTS_FAILED,
    error,
  }),
});
