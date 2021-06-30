import { constants } from 'modules/University/GetFaculties';

export const getFaculties = ({
  request: (data) => ({
    type: constants.GET_FACULTIES_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_FACULTIES_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_FACULTIES_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_FACULTIES_RESET,
  }),
});
