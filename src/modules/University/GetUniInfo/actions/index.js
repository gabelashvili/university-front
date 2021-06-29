import { constants } from 'modules/University/GetUniInfo';

export const getUniInfo = ({
  request: (uniId) => ({
    type: constants.GET_UNI_INFO_REQUESTED,
    payload: uniId,
  }),
  succeed: (response) => ({
    type: constants.GET_UNI_INFO_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_UNI_INFO_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_UNI_INFO_RESET,
  }),
});
