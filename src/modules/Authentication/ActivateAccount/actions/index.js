import { constants } from 'modules/Authentication/ActivateAccount';

export const activate = ({
  request: (token) => ({
    type: constants.ACTIVATION_REQUESTED,
    payload: token,
  }),
  succeed: (response) => ({
    type: constants.ACTIVATION_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.ACTIVATION_FAILED,
    error,
  }),
});
