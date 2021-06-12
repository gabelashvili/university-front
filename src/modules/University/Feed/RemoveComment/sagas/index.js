import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { removeCommentApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/RemoveComment';

function* removeComment(action) {
  const commentId = action.payload;
  try {
    const response = yield call(removeCommentApi, commentId);
    yield put(actions.removeComment.succeed(response));
  } catch (error) {
    yield put(actions.removeComment.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.REMOVE_COMMENT_REQUESTED, removeComment);
}
