import { constants } from 'modules/NavScroll';

const initialState = false;

const navScroll = (state = initialState, action) => {
  switch (action.type) {
    case constants.HANDLE_SCROLL_REQUESTED:
      return action.payload.isScrolled;
    default:
      return state;
  }
};

export default navScroll;
