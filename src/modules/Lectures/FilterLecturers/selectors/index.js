import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/FilterLecturers';

export const selectFilterLecturers = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
