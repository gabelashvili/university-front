import * as constants from 'modules/User/ChangePassword/constants';
import * as actions from 'modules/User/ChangePassword/actions';
import reducers from 'modules/User/ChangePassword/reducers';
import * as selectors from 'modules/User/ChangePassword/selectors';
import sagas from 'modules/User/ChangePassword/sagas';

const moduleName = 'User/ChangePassword';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
