import { constants } from 'modules/User/GetUser';

export const getUser = ({
  request: (data) => ({
    type: constants.GET_USER_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_USER_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_USER_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_USER_RESET,
  }),
});
