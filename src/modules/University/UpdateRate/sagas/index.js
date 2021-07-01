import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { updateUniRateApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/UpdateRate';

function* updateRate(action) {
  const data = action.payload;
  try {
    const response = yield call(updateUniRateApi, data);
    yield put(actions.updateRate.succeed(response));
  } catch (error) {
    yield put(actions.updateRate.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.UPDATE_UNI_RATE_REQUESTED, updateRate);
}
