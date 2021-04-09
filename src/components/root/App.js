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
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(authedUserActions.authedUser.set({
        userName: localStorage.getItem('firstName'),
        token,
      }));
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

  return (
    <Router>
      <BaseLayout>
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              key={route.name}
              render={route.component}
            />
          ))}
        </Switch>
      </BaseLayout>

    </Router>
  );
};

export default App;
