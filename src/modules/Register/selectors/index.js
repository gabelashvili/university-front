import { createSelector } from 'reselect';
import { moduleName } from 'modules/Register';

export const selectRegisterUser = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
