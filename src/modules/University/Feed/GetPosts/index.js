import * as constants from 'modules/University/Feed/GetPosts/constants';
import * as actions from 'modules/University/Feed/GetPosts/actions';
import reducers from 'modules/University/Feed/GetPosts/reducers';
import * as selectors from 'modules/University/Feed/GetPosts/selectors';
import sagas from 'modules/University/Feed/GetPosts/sagas';

const moduleName = 'University/Feed/GetAllPosts';

export {
  constants,
  reducers,
  moduleName,
  actions,
  sagas,
  selectors,
};
