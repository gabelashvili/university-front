import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { removeCommentLectureApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/RemoveComment';

function* removeComment(action) {
  const data = action.payload;
  try {
    const response = yield call(removeCommentLectureApi, data);
    yield put(actions.removeComment.succeed(response));
  } catch (error) {
    yield put(actions.removeComment.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.REMOVE_COMMENT_REQUESTED, removeComment);
}
