import { createSelector } from 'reselect';
import { moduleName } from 'modules/Notification';

export const selectNotification = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
