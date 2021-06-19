import { createSelector } from 'reselect';
import { moduleName } from 'modules/User/GetUser';

export const selectUser = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
