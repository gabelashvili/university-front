import { constants } from 'modules/Authentication/ResetPassword';

export const resetPassword = ({
  request: ({ password, rePassword, token }) => ({
    type: constants.RESET_PASSWORD_REQUESTED,
    payload: {
      password,
      rePassword,
      token,
    },
  }),
  succeed: (response) => ({
    type: constants.RESET_PASSWORD_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.RESET_PASSWORD_FAILED,
    error,
  }),
});
