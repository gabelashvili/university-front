import HomePage from 'components/HomePage';
import Register from 'components/Register';
import Auth from 'components/Auth';

export const routes = [
  {
    name: 'Home',
    component: HomePage,
    path: '/',
  },
  {
    name: 'Register',
    component: Register,
    path: '/register',
  },
  {
    name: 'Login',
    component: Auth,
    path: '/auth',
  },
];

export default routes;
