import { constants } from 'modules/University/Feed/RemovePost';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const removePost = (state = initialState, action) => {
  switch (action.type) {
    case constants.REMOVE_POST_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.REMOVE_POST_SUCCEED:
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
    case constants.REMOVE_POST_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.REMOVE_POST_RESET:
      return initialState;
    default:
      return state;
  }
};

export default removePost;
