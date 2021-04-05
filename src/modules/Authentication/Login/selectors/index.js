import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/Login';

export const selectLoginDetails = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
