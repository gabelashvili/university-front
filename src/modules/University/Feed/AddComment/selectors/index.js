import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/AddComment';

export const selectAddComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
