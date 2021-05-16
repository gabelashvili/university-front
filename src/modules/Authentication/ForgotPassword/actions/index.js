import { constants } from 'modules/Authentication/ForgotPassword';

export const forgotPassword = ({
  request: (email) => ({
    type: constants.FORGOT_PASSWORD_REQUESTED,
    payload: email,
  }),
  succeed: (response) => ({
    type: constants.FORGOT_PASSWORD_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.FORGOT_PASSWORD_FAILED,
    error,
  }),
});
