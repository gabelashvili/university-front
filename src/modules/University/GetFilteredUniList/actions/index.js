import { constants } from 'modules/University/GetFilteredUniList';

export const getFilteredUniList = ({
  request: (data) => ({
    type: constants.GET_FILTERED_UNI_LIST_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_FILTERED_UNI_LIST_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_FILTERED_UNI_LIST_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_FILTERED_UNI_LIST_RESET,
  }),
});
