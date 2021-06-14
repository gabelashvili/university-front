import { constants } from 'modules/University/GetFilteredUniList';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: {
    universities: null,
  },
};

const getFilteredUniList = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_FILTERED_UNI_LIST_REQUESTED:
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
    case constants.GET_FILTERED_UNI_LIST_SUCCEED:
      return {
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data,
        statusCode: action.response.status,
      };
    case constants.GET_FILTERED_UNI_LIST_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.GET_FILTERED_UNI_LIST_RESET:
      return initialState;
    default:
      return state;
  }
};

export default getFilteredUniList;
