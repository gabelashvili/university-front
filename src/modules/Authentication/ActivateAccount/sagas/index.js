import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { activateAccountApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Authentication/ActivateAccount';

function* activateAccount(action) {
  const token = action.payload;
  try {
    const response = yield call(activateAccountApi, token);
    yield put(actions.activate.succeed(response));
  } catch (error) {
    yield put(actions.activate.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.ACTIVATION_REQUESTED, activateAccount);
}
