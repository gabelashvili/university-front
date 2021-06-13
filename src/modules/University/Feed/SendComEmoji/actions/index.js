import { constants } from 'modules/University/Feed/SendComEmoji';

export const sendComEmoji = ({
  request: (data) => ({
    type: constants.SEND_COM_EMOJI_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.SEND_COM_EMOJI_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.SEND_COM_EMOJI_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.SEND_COM_EMOJI_RESET,
  }),
});
