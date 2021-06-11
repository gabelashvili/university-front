import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/FetchedPosts';

export const selectFetchedPosts = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
