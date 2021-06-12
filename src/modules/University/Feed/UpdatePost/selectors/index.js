import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/UpdatePost';

export const selectUpdatePost = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
