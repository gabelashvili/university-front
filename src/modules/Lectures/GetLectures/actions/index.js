import { constants } from 'modules/Lectures/GetLectures';

export const getLectures = ({
  request: (data) => ({
    type: constants.GET_LECTURES_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.GET_LECTURES_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.GET_LECTURES_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.GET_LECTURES_RESET,
  }),
});
