import { constants } from 'modules/Register';

export const register = ({
  request: (user) => ({
    type: constants.NEW_USER_REGISTER_REQUESTED,
    payload: user,
  }),
  succeed: (response) => ({
    type: constants.NEW_USER_REGISTER_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.NEW_USER_REGISTER_FAILED,
    error,
  }),
});
