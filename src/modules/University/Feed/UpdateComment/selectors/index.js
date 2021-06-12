import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/UpdateComment';

export const selectUpdateComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
