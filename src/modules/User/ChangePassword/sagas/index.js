import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { changePasswordApi } from 'helpers/gateway';
import { actions, constants } from 'modules/User/ChangePassword';

function* changePassword(action) {
  const data = action.payload;
  try {
    const response = yield call(changePasswordApi, data);
    yield put(actions.changePassword.succeed(response));
  } catch (error) {
    yield put(actions.changePassword.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.CHANGE_PASSWORD_REQUESTED, changePassword);
}
