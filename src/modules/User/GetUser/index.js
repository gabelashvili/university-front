import * as constants from 'modules/User/GetUser/constants';
import * as actions from 'modules/User/GetUser/actions';
import reducers from 'modules/User/GetUser/reducers';
import * as selectors from 'modules/User/GetUser/selectors';
import sagas from 'modules/User/GetUser/sagas';

const moduleName = 'User/GetUser';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
