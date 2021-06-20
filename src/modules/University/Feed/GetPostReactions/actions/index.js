import { constants } from 'modules/University/Feed/GetPostReactions';

export const getPostReactions = ({
  request: (data) => ({
    type: constants.GET_POST_REACTIONS_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_POST_REACTIONS_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_POST_REACTIONS_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_POST_REACTIONS_RESET,
  }),
});
