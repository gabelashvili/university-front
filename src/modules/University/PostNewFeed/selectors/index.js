import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/PostNewFeed';

export const selectPostNewFeed = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
