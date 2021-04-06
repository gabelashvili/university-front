import { createSelector } from 'reselect';
import { moduleName } from 'modules/Modal';

export const selectModalState = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
