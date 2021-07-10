import { createSelector } from 'reselect';
import { moduleName } from 'modules/Lectures/AddComment';

export const selectAddComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
