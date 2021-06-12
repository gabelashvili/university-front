import { constants } from 'modules/University/Feed/RemoveComment';

export const removePost = ({
  request: (commentId) => ({
    type: constants.REMOVE_COMMENT_REQUESTED,
    payload: commentId,
  }),
  succeed: (response) => ({
    type: constants.REMOVE_COMMENT_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.REMOVE_COMMENT_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.REMOVE_COMMENT_RESET,
  }),
});
