import { createSelector } from 'reselect';
import { moduleName } from 'modules/User/UpdateUserInfo';

export const selectUpdateUserInfo = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
