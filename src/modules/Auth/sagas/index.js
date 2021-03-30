import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { auth } from 'helpers/gateway';
import { actions, constants } from 'modules/Auth';

function* getAuthUser(action) {
  const user = action.payload;
  try {
    const response = yield call(auth, user);
    yield put(actions.getTodo.succeed(response));
  } catch (error) {
    yield put(actions.getTodo.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.AUTH_REQUESTED, getAuthUser);
}