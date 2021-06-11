import { constants } from 'modules/University/Feed/RemovePost';

export const removePost = ({
  request: (postId) => ({
    type: constants.REMOVE_POST_REQUESTED,
    payload: postId,
  }),
  succeed: (response) => ({
    type: constants.REMOVE_POST_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.REMOVE_POST_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.REMOVE_POST_RESET,
  }),
});
