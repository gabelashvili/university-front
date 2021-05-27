import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed';

export const selectPostNewFeed = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
