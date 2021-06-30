import * as constants from 'modules/University/GetFaculties/constants';
import * as actions from 'modules/University/GetFaculties/actions';
import reducers from 'modules/University/GetFaculties/reducers';
import * as selectors from 'modules/University/GetFaculties/selectors';
import sagas from 'modules/University/GetFaculties/sagas';

const moduleName = 'University/GetFaculties';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
