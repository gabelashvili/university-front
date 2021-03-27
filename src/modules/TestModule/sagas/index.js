import {
  put, takeLatest, call,
} from 'redux-saga/effects';
import { getTodo } from 'helpers/gateway';
import { actions, constants } from 'modules/TestModule';

function* getTodoSaga(action) {
  const { todoId } = action.payload;
  try {
    const response = yield call(getTodo, todoId);
    yield put(actions.getTodo.succeed(response));
  } catch (error) {
    yield put(actions.getTodo.failed(error));
  }
}

export default function* () {
  yield takeLatest(constants.TODO_REQUESTED, getTodoSaga);
}
