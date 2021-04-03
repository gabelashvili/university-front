import { constants } from 'modules/Notification';

const initialState = {
  duration: 3000,
  text: '',
  type: 'success',
  isOpen: false,
};

const authModule = (state = initialState, action) => {
  switch (action.type) {
    case constants.NOTIFICATION_OPEN:
      return {
        ...initialState,
        isOpen: true,
        ...action.payload,
      };
    case constants.NOTIFICATION_CLOSE:
      return initialState;
    default:
      return state;
  }
};

export default authModule;
