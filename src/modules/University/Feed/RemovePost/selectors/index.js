import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/RemovePost';

export const selectRemovePost = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
