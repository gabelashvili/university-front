import * as constants from 'modules/Lectures/GetComments/constants';
import * as actions from 'modules/Lectures/GetComments/actions';
import reducers from 'modules/Lectures/GetComments/reducers';
import * as selectors from 'modules/Lectures/GetComments/selectors';
import sagas from 'modules/Lectures/GetComments/sagas';

const moduleName = 'Lectures/GetComments';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
