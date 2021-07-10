import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { filterRecturersApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/FilterLecturers';

function* filterLecturers(action) {
  const data = action.payload;
  try {
    const response = yield call(filterRecturersApi, data);
    yield put(actions.filterLecturers.succeed(response));
  } catch (error) {
    yield put(actions.filterLecturers.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.FILTER_LECTURERS_REQUESTED, filterLecturers);
}
