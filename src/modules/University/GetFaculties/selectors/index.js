import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/GetFaculties';

export const selectGetFaculties = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
