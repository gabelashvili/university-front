import { createSelector } from 'reselect';
import { moduleName } from 'modules/Login';

export const selectLoginDetails = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
