import { createSelector } from 'reselect';
import { moduleName } from 'modules/NavScroll';

export const selectScrollState = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
