import * as constants from 'modules/Authentication/ResetPassword/constants';
import * as actions from 'modules/Authentication/ResetPassword/actions';
import reducers from 'modules/Authentication/ResetPassword/reducers';
import * as selectors from 'modules/Authentication/ResetPassword/selectors';
import sagas from 'modules/Authentication/ResetPassword/sagas';

const moduleName = 'Authentication/ResetPassword';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
