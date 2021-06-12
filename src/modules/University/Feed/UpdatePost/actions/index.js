import { constants } from 'modules/University/Feed/UpdatePost';

export const updatePost = ({
  request: (data) => ({
    type: constants.UPDATE_POST_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.UPDATE_POST_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.UPDATE_POST_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.UPDATE_POST_RESET,
  }),
});
