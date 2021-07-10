import * as constants from 'modules/Lectures/UpdateRate/constants';
import * as actions from 'modules/Lectures/UpdateRate/actions';
import reducers from 'modules/Lectures/UpdateRate/reducers';
import * as selectors from 'modules/Lectures/UpdateRate/selectors';
import sagas from 'modules/Lectures/UpdateRate/sagas';

const moduleName = 'Lectures/UpdateRate';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
