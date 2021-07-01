import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/UpdateRate';

export const selectUpdateRate = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
