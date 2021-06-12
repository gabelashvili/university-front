import * as constants from 'modules/University/Feed/GetComments/constants';
import * as actions from 'modules/University/Feed/GetComments/actions';
import reducers from 'modules/University/Feed/GetComments/reducers';
import * as selectors from 'modules/University/Feed/GetComments/selectors';
import sagas from 'modules/University/Feed/GetComments/sagas';

const moduleName = 'University/Feed/GetComments';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
