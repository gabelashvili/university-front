import * as constants from 'modules/Authentication/ForgotPassword/constants';
import * as actions from 'modules/Authentication/ForgotPassword/actions';
import reducers from 'modules/Authentication/ForgotPassword/reducers';
import * as selectors from 'modules/Authentication/ForgotPassword/selectors';
import sagas from 'modules/Authentication/ForgotPassword/sagas';

const moduleName = 'Authentication/ForgotPassword';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
