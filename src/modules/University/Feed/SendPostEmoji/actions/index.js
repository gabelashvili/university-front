import { constants } from 'modules/University/Feed/SendPostEmoji';

export const sendPostEmoji = ({
  request: (data) => ({
    type: constants.SEND_POST_EMOJI_REQUESTED,
    payload: data,
  }),
  succeed: (response) => ({
    type: constants.SEND_POST_EMOJI_SUCCEED,
    response,
  }),
  failed: (error) => ({
    type: constants.SEND_POST_EMOJI_FAILED,
    error,
  }),
  reset: () => ({
    type: constants.SEND_POST_EMOJI_RESET,
  }),
});
