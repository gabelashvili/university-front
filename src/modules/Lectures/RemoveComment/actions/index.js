import { constants } from 'modules/Lectures/RemoveComment';

export const removeComment = ({
  request: (data) => ({
    type: constants.REMOVE_COMMENT_REQUESTED,
    payload: data,
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
