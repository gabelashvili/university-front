import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/RemoveComment';

export const selectRemoveComment = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
