import { constants } from 'modules/Authentication/Login';

export const auth = ({
  request: (user) => ({
    type: constants.LOGIN_REQUESTED,
    payload: user,
  }),
  succeed: (response) => ({
    type: constants.LOGIN_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.LOGIN_FAILED,
    error,
  }),
});
