import { constants } from 'modules/Modal';

const initialState = false;

const modal = (state = initialState, action) => {
  switch (action.type) {
    case constants.MODAL_OPEN:
      return true;
    case constants.MODAL_CLOSE:
      return false;
    default:
      return state;
  }
};

export default modal;
