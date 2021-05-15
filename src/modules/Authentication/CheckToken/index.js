import * as constants from 'modules/Authentication/CheckToken/constants';
import * as actions from 'modules/Authentication/CheckToken/actions';
import reducers from 'modules/Authentication/CheckToken/reducers';
import * as selectors from 'modules/Authentication/CheckToken/selectors';
import sagas from 'modules/Authentication/CheckToken/sagas';

const moduleName = 'Authentication/CheckToken';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
