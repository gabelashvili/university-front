import * as constants from 'modules/Authentication/AuthedUser/constants';
import * as actions from 'modules/Authentication/AuthedUser/actions';
import reducers from 'modules/Authentication/AuthedUser/reducers';
import * as selectors from 'modules/Authentication/AuthedUser/selectors';
import * as hooks from 'modules/Authentication/AuthedUser/hooks';

const moduleName = 'Authentication/AuthedUser';

export {
  constants,
  reducers,
  moduleName,
  actions,
  selectors,
  hooks,
};
