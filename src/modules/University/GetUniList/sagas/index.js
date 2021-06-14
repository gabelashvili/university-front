import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getUniListApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/GetUniList';

function* getUniList(action) {
  const data = action.payload;
  try {
    const response = yield call(getUniListApi, data);
    yield put(actions.getUniList.succeed(response));
  } catch (error) {
    yield put(actions.getUniList.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_UNI_LIST_REQUESTED, getUniList);
}
