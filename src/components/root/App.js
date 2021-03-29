import BaseLayout from 'components/BaseLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import routes from 'helpers/routes';

const App = () => (
  <Router>
    <BaseLayout>
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} component={route.component} key={route.name} />
        ))}
      </Switch>
    </BaseLayout>

  </Router>
);

export default App;
