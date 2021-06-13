import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { sendPostEmojiApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/SendPostEmoji';

function* sendPostEmoji(action) {
  const data = action.payload;
  try {
    const response = yield call(sendPostEmojiApi, data);
    yield put(actions.sendPostEmoji.succeed(response));
  } catch (error) {
    yield put(actions.sendPostEmoji.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.SEND_POST_EMOJI_REQUESTED, sendPostEmoji);
}
