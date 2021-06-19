import { createSelector } from 'reselect';
import { moduleName } from 'modules/User/ChangePassword';

export const selectChangePassword = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
