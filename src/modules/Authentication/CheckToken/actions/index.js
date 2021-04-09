import { constants } from 'modules/Authentication/CheckToken';

export const checkToken = ({
  request: (user) => ({
    type: constants.CHECK_TOKEN_REQUESTED,
    payload: user,
  }),
  succeed: (response) => ({
    type: constants.CHECK_TOKEN_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.CHECK_TOKEN_FAILED,
    error,
  }),
});
