import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/ActivateAccount';

export const selectActivationDetails = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
