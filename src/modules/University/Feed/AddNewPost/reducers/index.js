import { constants } from 'modules/University/Feed/AddNewPost';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const feed = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_NEW_POST_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.ADD_NEW_POST_SUCCEED:
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
    case constants.ADD_NEW_POST_FAILED:
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

export default feed;
