import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getPostReactionApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/GetPostReactions';

function* getPostReactions(action) {
  const data = action.payload;
  try {
    const response = yield call(getPostReactionApi, data);
    yield put(actions.getPostReactions.succeed(response));
  } catch (error) {
    yield put(actions.getPostReactions.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_POST_REACTIONS_REQUESTED, getPostReactions);
}
