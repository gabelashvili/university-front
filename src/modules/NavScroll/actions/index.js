import { constants } from 'modules/NavScroll';

export const setScrollState = ({
  request: (isScrolled) => ({
    type: constants.HANDLE_SCROLL_REQUESTED,
    payload: {
      isScrolled,
    },
  }),
});
