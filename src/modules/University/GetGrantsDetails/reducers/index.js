import { constants } from 'modules/University/GetGrantsDetails';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: {},
};

const getGrantsDetails = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_GRANT_DSETAILS_REQUESTED:
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
    case constants.GET_GRANTS_DETAILS_SUCCEED:
      return {
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data.statistics,
        statusCode: action.response.status,
      };
    case constants.GET_GRANST_DETAILS_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.GET_GRASNT_DETAILS_RESET:
      return initialState;
    default:
      return state;
  }
};

export default getGrantsDetails;
