import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { registerApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Authentication/Register';

function* registerUser(action) {
  const user = action.payload;
  try {
    const response = yield call(registerApi, user);
    yield put(actions.register.succeed(response));
  } catch (error) {
    yield put(actions.register.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.NEW_USER_REGISTER_REQUESTED, registerUser);
}
