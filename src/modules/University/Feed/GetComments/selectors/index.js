import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/GetComments';

export const selectGetComments = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
