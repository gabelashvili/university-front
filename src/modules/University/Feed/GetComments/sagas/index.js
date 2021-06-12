import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getCommentsApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/GetComments';

function* getComments(action) {
  const data = action.payload;
  try {
    const response = yield call(getCommentsApi, data);
    yield put(actions.getComments.succeed(response));
  } catch (error) {
    yield put(actions.getComments.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_COMMENTS_REQUESTED, getComments);
}
