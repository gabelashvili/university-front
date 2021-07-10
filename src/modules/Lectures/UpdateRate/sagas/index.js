import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { updateRateLectureApi } from 'helpers/gateway';
import { actions, constants } from 'modules/Lectures/UpdateRate';

function* updateRate(action) {
  const data = action.payload;
  try {
    const response = yield call(updateRateLectureApi, data);
    yield put(actions.updateRate.succeed(response));
  } catch (error) {
    yield put(actions.updateRate.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.UPDATE_RATE_REQUESTED, updateRate);
}
