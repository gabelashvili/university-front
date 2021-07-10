import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/RemoveComment';

export const selectRemoveComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
