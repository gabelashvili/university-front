import * as constants from 'modules/Authentication/Login/constants';
import * as actions from 'modules/Authentication/Login/actions';
import reducers from 'modules/Authentication/Login/reducers';
import * as selectors from 'modules/Authentication/Login/selectors';
import sagas from 'modules/Authentication/Login/sagas';

const moduleName = 'Authentication/Login';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
