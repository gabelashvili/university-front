import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { postNewFeedApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed';

function* postNewFeed(action) {
  const { image, data } = action.payload;
  try {
    const response = yield call(postNewFeedApi, image, data);
    yield put(actions.postNewFeed.succeed(response));
  } catch (error) {
    yield put(actions.postNewFeed.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.POST_NEW_FEED_REQUESTED, postNewFeed);
}
