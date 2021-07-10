import { constants } from 'modules/Lectures/UpdateComment';

export const updateComment = ({
  request: (data) => ({
    type: constants.UPDATE_COMMENT_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.UPDATE_COMMENT_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.UPDATE_COMMENT_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.UPDATE_COMMENT_RESET,
  }),
});
