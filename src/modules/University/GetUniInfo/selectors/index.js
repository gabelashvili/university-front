import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/GetUniInfo';

export const selectGetUniInfo = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
