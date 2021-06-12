import { constants } from 'modules/University/Feed/GetComments';

export const getComments = ({
  request: (data) => ({
    type: constants.GET_COMMENTS_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_COMMENTS_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_COMMENTS_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_COMMENTS_RESET,
  }),
});
