import { constants } from 'modules/University/Feed/SendComEmoji';

const initialState = {
  statuses: {
    isPending: false,
    isSucceed: false,
    isFailed: false,
  },
  data: [],
};

const sendComEmoji = (state = initialState, action) => {
  switch (action.type) {
    case constants.SEND_COM_EMOJI_REQUESTED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isPending: true,
        },
      };
    case constants.SEND_COM_EMOJI_SUCCEED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isSucceed: true,
          isPending: false,
        },
        data: action.response.data,
        statusCode: action.response.status,
      };
    case constants.SEND_COM_EMOJI_FAILED:
      return {
        ...initialState,
        statuses: {
          ...initialState.statuses,
          isFailed: true,
          isPending: false,
        },
        errorMessage: action.error,
      };
    case constants.SEND_COM_EMOJI_RESET:
      return initialState;
    default:
      return state;
  }
};

export default sendComEmoji;
