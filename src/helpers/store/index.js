import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
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

const composeEnhancers = process.env.REACT_APP_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : null || compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);

const store = createStore(allReducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
