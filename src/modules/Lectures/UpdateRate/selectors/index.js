import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/UpdateRate';

export const selectUpdateRate = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
