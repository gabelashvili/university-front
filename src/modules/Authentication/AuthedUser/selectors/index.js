import { createSelector } from 'reselect';
import { moduleName } from 'modules/Authentication/AuthedUser';

export const selectAuthedUser = createSelector(
  (state) => state[moduleName],
  (data) => data,
);

export const selectIsAuthed = createSelector(
  (state) => state[moduleName],
  (data) => data.isAuthed,
);
