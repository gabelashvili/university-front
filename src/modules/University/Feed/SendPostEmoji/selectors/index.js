import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/SendPostEmoji';

export const selectSendPostEmoji = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
