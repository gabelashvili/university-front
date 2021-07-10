import * as constants from 'modules/Lectures/FilterLecturers/constants';
import * as actions from 'modules/Lectures/FilterLecturers/actions';
import reducers from 'modules/Lectures/FilterLecturers/reducers';
import * as selectors from 'modules/Lectures/FilterLecturers/selectors';
import sagas from 'modules/Lectures/FilterLecturers/sagas';

const moduleName = 'Lectures/FilterLecturers';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
