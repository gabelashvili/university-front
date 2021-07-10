import { constants } from 'modules/Lectures/UpdateRate';

export const updateRate = ({
  request: (data) => ({
    type: constants.UPDATE_RATE_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.UPDATE_RATE_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.UPDATE_RATE_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.UPDATE_RATE_RESET,
  }),
});
