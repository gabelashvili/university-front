import { constants } from 'modules/Notification';

export const changeState = ({
  open: (state) => ({
    type: constants.NOTIFICATION_OPEN,
    payload: state,
  }),
  close: () => ({
    type: constants.NOTIFICATION_CLOSE,
  }),
});
