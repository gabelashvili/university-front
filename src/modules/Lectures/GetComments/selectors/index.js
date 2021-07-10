import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/GetComments';

export const selectGetComments = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
