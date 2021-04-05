import * as constants from 'modules/Authentication/ActivateAccount/constants';
import * as actions from 'modules/Authentication/ActivateAccount/actions';
import reducers from 'modules/Authentication/ActivateAccount/reducers';
import * as selectors from 'modules/Authentication/ActivateAccount/selectors';
import sagas from 'modules/Authentication/ActivateAccount/sagas';

const moduleName = 'Authentication/ActivateAccount';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
