import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/GetPosts';

export const selectGetPosts = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
