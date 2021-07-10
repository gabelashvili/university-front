import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getLecturesApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/GetLectures';

function* getLectures(action) {
  const data = action.payload;
  try {
    const response = yield call(getLecturesApi, data);
    yield put(actions.getLectures.succeed(response));
  } catch (error) {
    yield put(actions.getLectures.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_LECTURES_REQUESTED, getLectures);
}
