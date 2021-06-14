import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/GetUniList';

export const selectGetUniList = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
