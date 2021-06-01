import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getPostsApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/GetPosts';

function* getPosts(action) {
  const { offset, limit } = action.payload;
  try {
    const response = yield call(getPostsApi, offset, limit);
    yield put(actions.getPosts.succeed(response));
  } catch (error) {
    yield put(actions.getPosts.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_POSTS_REQUESTED, getPosts);
}
