import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { updateCommentLectureApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/UpdateComment';

function* updateComment(action) {
  const data = action.payload;
  try {
    const response = yield call(updateCommentLectureApi, data);
    yield put(actions.updateComment.succeed(response));
  } catch (error) {
    yield put(actions.updateComment.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.UPDATE_COMMENT_REQUESTED, updateComment);
}
