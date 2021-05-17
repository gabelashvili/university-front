import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { resetPasswordApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Authentication/ResetPassword';

function* resetPassword(action) {
  const data = action.payload;
  try {
    const response = yield call(resetPasswordApi, data);
    yield put(actions.resetPassword.succeed(response));
  } catch (error) {
    yield put(actions.resetPassword.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.RESET_PASSWORD_REQUESTED, resetPassword);
}
