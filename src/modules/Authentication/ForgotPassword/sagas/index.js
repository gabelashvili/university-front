import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { forgotPasswordApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Authentication/ForgotPassword';

function* forgotPassword(action) {
  const email = action.payload;
  try {
    const response = yield call(forgotPasswordApi, email);
    yield put(actions.forgotPassword.succeed(response));
  } catch (error) {
    yield put(actions.forgotPassword.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.FORGOT_PASSWORD_REQUESTED, forgotPassword);
}
