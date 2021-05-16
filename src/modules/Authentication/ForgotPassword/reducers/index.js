import { constants } from 'modules/Authentication/ForgotPassword';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case constants.FORGOT_PASSWORD_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.FORGOT_PASSWORD_SUCCEED:
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
    case constants.FORGOT_PASSWORD_FAILED:
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

export default forgotPassword;
