import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { sendComEmojiApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/SendComEmoji';

function* sendComEmoji(action) {
  const data = action.payload;
  try {
    const response = yield call(sendComEmojiApi, data);
    yield put(actions.sendComEmoji.succeed(response));
  } catch (error) {
    yield put(actions.sendComEmoji.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.SEND_COM_EMOJI_REQUESTED, sendComEmoji);
}
