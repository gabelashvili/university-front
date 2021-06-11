import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { removePostApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/RemovePost';

function* removePost(action) {
  const postId = action.payload;
  try {
    const response = yield call(removePostApi, postId);
    yield put(actions.removePost.succeed(response));
  } catch (error) {
    yield put(actions.removePost.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.REMOVE_POST_REQUESTED, removePost);
}
