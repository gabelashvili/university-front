import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getUniInfoApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/GetUniInfo';

function* getUniInfo(action) {
  const uniId = action.payload;
  try {
    const response = yield call(getUniInfoApi, uniId);
    yield put(actions.getUniInfo.succeed(response));
  } catch (error) {
    yield put(actions.getUniInfo.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_UNI_INFO_REQUESTED, getUniInfo);
}
