import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getFacultiesApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/GetFaculties';

function* getFaculties(action) {
  const data = action.payload;
  try {
    const response = yield call(getFacultiesApi, data);
    yield put(actions.getFaculties.succeed(response));
  } catch (error) {
    yield put(actions.getFaculties.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_FACULTIES_REQUESTED, getFaculties);
}
