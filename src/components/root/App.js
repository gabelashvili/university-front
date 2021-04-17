import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from 'pages/BaseLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from 'helpers/routes';
import {
  actions as checkTokenActions,
  selectors as checkTokenSelectors,
} from 'modules/Authentication/CheckToken';
import {
  selectors as authedUserSelector,
  actions as authedUserActions,
} from 'modules/Authentication/AuthedUser';

const App = () => {
  const dispatch = useDispatch();
  const authedUser = useSelector(authedUserSelector.selectAuthedUser);
  const checkToken = useSelector(checkTokenSelectors.selectTokenState);
  const localStorageUserData = JSON.parse(localStorage.getItem('authedUser'));
  useEffect(() => {
    if (localStorageUserData) {
      dispatch(authedUserActions.authedUser.set(localStorageUserData));
    }
  }, []);

  useEffect(() => {
    if (authedUser.isAuthed) {
      dispatch(checkTokenActions.checkToken.request());
    }
  }, [authedUser]);

  useEffect(() => {
    if (checkToken.statuses.isFailed) {
      dispatch(authedUserActions.authedUser.remove());
    }
  }, [checkToken]);

  useEffect(() => {
    console.log(authedUser);
  }, [authedUser]);
  return (
    <Router>
      <BaseLayout>
        <Switch>
          {routes.map((route) => (
            <Route
              exact
              path={route.path}
              key={route.name}
              component={route.component}
            />
          ))}
        </Switch>
      </BaseLayout>
    </Router>
  );
};

export default App;
