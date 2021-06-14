import { constants } from 'modules/University/GetUniList';

export const getUniList = ({
  request: (data) => ({
    type: constants.GET_UNI_LIST_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_UNI_LIST_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_UNI_LIST_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_UNI_LIST_RESET,
  }),
});
