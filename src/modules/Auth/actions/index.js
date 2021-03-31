import { constants } from 'modules/Auth';

export const auth = ({
  request: (user) => ({
    type: constants.AUTH_REQUESTED,
    payload: user,
  }),
  succeed: (response) => ({
    type: constants.AUTH_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.AUTH_FAILED,
    error,
  }),
});
