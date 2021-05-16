import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/ForgotPassword';

export const selectForgotPassword = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
