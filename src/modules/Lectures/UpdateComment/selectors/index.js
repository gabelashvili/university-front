import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/UpdateComment';

export const selectUpdateComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
