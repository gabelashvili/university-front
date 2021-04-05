import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/Register';

export const selectRegisterUser = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
