import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/CheckToken';

export const selectTokenState = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
