import { constants } from 'modules/University/GetUniList';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: {
    totally: 0,
    universities: [],
  },
};

const getUniList = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_UNI_LIST_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.GET_UNI_LIST_SUCCEED:
      return {
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: {
          totally: action.response.data.totally,
          universities: [...state.data.universities, ...action.response.data.universities],
        },
        statusCode: action.response.status,
      };
    case constants.GET_UNI_LIST_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.GET_UNI_LIST_RESET:
      return initialState;
    default:
      return state;
  }
};

export default getUniList;
