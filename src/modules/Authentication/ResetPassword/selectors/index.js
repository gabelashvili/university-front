import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/ResetPassword';

export const selectResetPassword = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
