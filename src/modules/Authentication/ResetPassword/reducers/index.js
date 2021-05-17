import { constants } from 'modules/Authentication/ResetPassword';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case constants.RESET_PASSWORD_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.RESET_PASSWORD_SUCCEED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data,
        statusCode: action.response.status,
      };
    case constants.RESET_PASSWORD_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default resetPassword;
