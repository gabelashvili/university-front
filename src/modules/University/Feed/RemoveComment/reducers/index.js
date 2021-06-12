import { constants } from 'modules/University/Feed/RemoveComment';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const RemoveComment = (state = initialState, action) => {
  switch (action.type) {
    case constants.REMOVE_COMMENT_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.REMOVE_COMMENT_SUCCEED:
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
    case constants.REMOVE_COMMENT_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.REMOVE_COMMENT_RESET:
      return initialState;
    default:
      return state;
  }
};

export default RemoveComment;
