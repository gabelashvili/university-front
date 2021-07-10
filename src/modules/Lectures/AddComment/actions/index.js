import { constants } from 'modules/Lectures/AddComment';

export const addComment = ({
  request: (data) => ({
    type: constants.ADD_COMMENT_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.ADD_COMMENT_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.ADD_COMMENT_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.ADD_COMMENT_RESET,
  }),
});
