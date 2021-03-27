import { createSelector } from 'reselect';
import { moduleName } from 'modules/TestModule';

export const selectTodo = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
