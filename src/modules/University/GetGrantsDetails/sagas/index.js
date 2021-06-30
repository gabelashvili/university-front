import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getGrantsDetailsApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/GetGrantsDetails';

function* getGrantsDetails(action) {
  const data = action.payload;
  try {
    const response = yield call(getGrantsDetailsApi, data);
    yield put(actions.getGrantsDetails.succeed(response));
  } catch (error) {
    yield put(actions.getGrantsDetails.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.GET_GRANTS_DETAILS_REQUESTED, getGrantsDetails);
}
