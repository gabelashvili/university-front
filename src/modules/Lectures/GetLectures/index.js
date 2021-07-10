import * as constants from 'modules/Lectures/GetLectures/constants';
import * as actions from 'modules/Lectures/GetLectures/actions';
import reducers from 'modules/Lectures/GetLectures/reducers';
import * as selectors from 'modules/Lectures/GetLectures/selectors';
import sagas from 'modules/Lectures/GetLectures/sagas';

const moduleName = 'Lectures/GetLectures';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
