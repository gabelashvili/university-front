import { constants } from 'modules/Lectures/RemoveComment';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: {
    totally: 0,
    comments: [],
  },
};

const removeComment = (state = initialState, action) => {
  switch (action.type) {
    case constants.REMOVE_COMMENT_REQUESTED:
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
    case constants.REMOVE_COMMENT_SUCCEED:
      return {
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

export default removeComment;
