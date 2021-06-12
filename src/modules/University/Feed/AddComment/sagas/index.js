import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { addCommentApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/AddComment';

function* addComment(action) {
  const data = action.payload;
  try {
    const response = yield call(addCommentApi, data);
    yield put(actions.addComment.succeed(response));
  } catch (error) {
    yield put(actions.addComment.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.ADD_COMMENT_REQUESTED, addComment);
}
