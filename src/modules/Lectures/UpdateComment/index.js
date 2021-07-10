import * as constants from 'modules/Lectures/UpdateComment/constants';
import * as actions from 'modules/Lectures/UpdateComment/actions';
import reducers from 'modules/Lectures/UpdateComment/reducers';
import * as selectors from 'modules/Lectures/UpdateComment/selectors';
import sagas from 'modules/Lectures/UpdateComment/sagas';

const moduleName = 'Lectures/UpdateComment';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
