import { createSelector } from 'reselect';
import { moduleName } from 'modules/Auth';

export const selectUser = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
