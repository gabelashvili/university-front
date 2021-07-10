import { constants } from 'modules/Lectures/GetLectures';

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

const getLectures = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_LECTURES_REQUESTED:
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
    case constants.GET_LECTURES_SUCCEED:
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
    case constants.GET_LECTURES_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.GET_LECTURES_RESET:
      return initialState;
    default:
      return state;
  }
};

export default getLectures;
