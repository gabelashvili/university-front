import { constants } from 'modules/User/UpdateUserInfo';

export const updateUserInfo = ({
  request: (data) => ({
    type: constants.UPDATE_USER_INFO_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.UPDATE_USER_INFO_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.UPDATE_USER_INFO_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.UPDATE_USER_INFO_RESET,
  }),
});
