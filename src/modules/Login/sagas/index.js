import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { auth } from 'helpers/gateway';
import { actions, constants } from 'modules/Login';

function* getAuthUser(action) {
  const user = action.payload;
  try {
    const response = yield call(auth, user);
    yield put(actions.auth.succeed(response));
  } catch (error) {
    yield put(actions.auth.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.LOGIN_REQUESTED, getAuthUser);
}
