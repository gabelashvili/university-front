import {
  put, call, debounce,
} from 'redux-saga/effects';
import { getFilteredUniListApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/GetFilteredUniList';

function* getFilteredUniList(action) {
  const data = action.payload;
  try {
    const response = yield call(getFilteredUniListApi, data);
    yield put(actions.getFilteredUniList.succeed(response));
  } catch (error) {
    yield put(actions.getFilteredUniList.failed(error));
  }
}

export default function* () {
  yield debounce(300, constants.GET_FILTERED_UNI_LIST_REQUESTED, getFilteredUniList);
}
