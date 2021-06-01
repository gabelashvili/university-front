import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { addNewPostApi } from 'helpers/gateway';
import { actions, constants } from 'modules/University/Feed/AddNewPost';

function* postNewFeed(action) {
  const { image, data } = action.payload;
  try {
    const response = yield call(addNewPostApi, image, data);
    yield put(actions.addNewPost.succeed(response));
  } catch (error) {
    yield put(actions.addNewPost.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.ADD_NEW_POST_REQUESTED, postNewFeed);
}
