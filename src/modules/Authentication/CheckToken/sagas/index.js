import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { checkTokenApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Authentication/CheckToken';

function* checkToken(action) {
  const user = action.payload;
  try {
    const response = yield call(checkTokenApi, user);
    yield put(actions.checkToken.succeed(response));
  } catch (error) {
    yield put(actions.checkToken.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.CHECK_TOKEN_REQUESTED, checkToken);
}
