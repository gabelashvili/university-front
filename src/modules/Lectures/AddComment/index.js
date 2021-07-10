import * as constants from 'modules/Lectures/AddComment/constants';
import * as actions from 'modules/Lectures/AddComment/actions';
import reducers from 'modules/Lectures/AddComment/reducers';
import * as selectors from 'modules/Lectures/AddComment/selectors';
import sagas from 'modules/Lectures/AddComment/sagas';

const moduleName = 'Lectures/AddComment';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
