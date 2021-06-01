import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/AddNewPost';

export const selectAddNewPost = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
