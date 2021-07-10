import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getLecturerCommentsApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/GetComments';

function* getComments(action) {
  const data = action.payload;
  try {
    const response = yield call(getLecturerCommentsApi, data);
    yield put(actions.getComments.succeed(response));
  } catch (error) {
    yield put(actions.getComments.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_COMMENTS_REQUESTED, getComments);
}
