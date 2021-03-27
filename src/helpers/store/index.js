import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import getReducersAndSagas from 'helpers/store/helpers';

const data = getReducersAndSagas();
const sagaMiddleware = createSagaMiddleware();
const allReducers = combineReducers({
  ...data.reducers,
});

function* rootSaga() {
  yield all(data.sagas.map((saga) => saga()));
}

const store = createStore(
  allReducers,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
