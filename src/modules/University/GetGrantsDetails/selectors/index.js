import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/GetGrantsDetails';

export const selectGetGrantsDetails = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
