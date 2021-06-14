import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/GetFilteredUniList';

export const selectGetFilteredUniList = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
