import { constants } from 'modules/Modal';

export const setModalState = ({
  open: () => ({ type: constants.MODAL_OPEN }),
  close: () => ({ type: constants.MODAL_CLOSE }),
});
