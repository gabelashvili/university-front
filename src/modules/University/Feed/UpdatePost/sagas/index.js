import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { updatePostApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/UpdatePost';

function* updatePost(action) {
  const data = action.payload;
  try {
    const response = yield call(updatePostApi, data);
    yield put(actions.updatePost.succeed(response));
  } catch (error) {
    yield put(actions.updatePost.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.UPDATE_POST_REQUESTED, updatePost);
}
