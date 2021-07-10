import { constants } from 'modules/Lectures/FilterLecturers';

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

const filterLecturers = (state = initialState, action) => {
  switch (action.type) {
    case constants.FILTER_LECTURERS_REQUESTED:
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
    case constants.FILTER_LECTURERS_SUCCEED:
      return {
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data,
        statusCode: action.response.status,
      };
    case constants.FILTER_LECTURERS_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.FILTER_LECTURERS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default filterLecturers;
