import BaseLayout from 'pages/BaseLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from 'helpers/routes';
import { actions as checkTokenActions } from 'modules/Authentication/CheckToken';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(checkTokenActions.checkToken.request());
    }
  }, []);
  return (
    <Router>
      <BaseLayout>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} component={route.component} key={route.name} />
          ))}
        </Switch>
      </BaseLayout>

    </Router>
  );
};

export default App;
