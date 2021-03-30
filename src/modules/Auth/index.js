import * as constants from 'modules/Auth/constants';
import * as actions from 'modules/Auth/actions';
import reducers from 'modules/Auth/reducers';
import * as selectors from 'modules/Auth/selectors';
import sagas from 'modules/Auth/sagas';

const moduleName = 'Auth';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
