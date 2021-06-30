import { constants } from 'modules/University/GetGrantsDetails';

export const getGrantsDetails = ({
  request: (data) => ({
    type: constants.GET_GRANTS_DETAILS_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_GRANTS_DETAILS_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_GRANTS_DETAILS_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_GRANTS_DETAILS_RESET,
  }),
});
