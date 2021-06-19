import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { updateUserDataApi } from 'helpers/gateway';
import { actions, constants } from 'modules/User/UpdateUserInfo';

function* updateUserInfo(action) {
  const data = action.payload;
  try {
    const response = yield call(updateUserDataApi, data);
    yield put(actions.updateUserInfo.succeed(response));
  } catch (error) {
    yield put(actions.updateUserInfo.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.UPDATE_USER_INFO_REQUESTED, updateUserInfo);
}
