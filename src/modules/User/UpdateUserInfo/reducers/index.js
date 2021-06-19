import { constants } from 'modules/User/UpdateUserInfo';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: {
  },
};

const updateUserInfo = (state = initialState, action) => {
  switch (action.type) {
    case constants.UPDATE_USER_INFO_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
        data: {
          ...state.data,
        },
      };
    case constants.UPDATE_USER_INFO_SUCCEED:
      return {
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data,
        statusCode: action.response.status,
      };
    case constants.UPDATE_USER_INFO_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error.response.data.message,
      };
    case constants.UPDATE_USER_INFO_RESET:
      return initialState;
    default:
      return state;
  }
};

export default updateUserInfo;
