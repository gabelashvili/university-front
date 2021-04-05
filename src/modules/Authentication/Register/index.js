import * as constants from 'modules/Authentication/Register/constants';
import * as actions from 'modules/Authentication/Register/actions';
import reducers from 'modules/Authentication/Register/reducers';
import * as selectors from 'modules/Authentication/Register/selectors';
import sagas from 'modules/Authentication/Register/sagas';

const moduleName = 'Authentication/Register';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
