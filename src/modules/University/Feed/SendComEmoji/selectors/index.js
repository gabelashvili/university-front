import { createSelector } from 'reselect';
import { moduleName } from 'modules/University/Feed/SendComEmoji';

export const selectSendComEmoji = createSelector(
  (state) => state[moduleName],
  (data) => data,
);
