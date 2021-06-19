import { constants } from 'modules/User/ChangePassword';

export const changePassword = ({
  request: (data) => ({
    type: constants.CHANGE_PASSWORD_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.CHANGE_PASSWORD_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.CHANGE_PASSWORD_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.CHANGE_PASSWORD_RESET,
  }),
});
