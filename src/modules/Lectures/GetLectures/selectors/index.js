import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/GetLectures';

export const selectGetLectures = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
