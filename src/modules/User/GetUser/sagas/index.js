import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getUserApi } from 'helpers/gateway';
import { actions, constants } from 'modules/User/GetUser';

function* getUser(action) {
  const id = action.payload;
  try {
    const response = yield call(getUserApi, id);
    yield put(actions.getUser.succeed(response));
  } catch (error) {
    yield put(actions.getUser.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_USER_REQUESTED, getUser);
}
