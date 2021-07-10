import { constants } from 'modules/Lectures/FilterLecturers';

export const filterLecturers = ({
  request: (data) => ({
    type: constants.FILTER_LECTURERS_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.FILTER_LECTURERS_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.FILTER_LECTURERS_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.FILTER_LECTURERS_RESET,
  }),
});
