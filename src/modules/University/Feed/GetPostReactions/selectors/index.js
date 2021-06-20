import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/GetPostReactions';

export const selectGetPostReactions = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
