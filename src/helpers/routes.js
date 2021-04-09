import userPage from 'pages/userPage';
import homePage from 'pages/homePage';

export const routes = [
  {
    name: 'Home',
    component: homePage,
    path: '/',
  },
  {
    name: 'Login',
    component: userPage,
    path: '/user/login',
  },
  {
    name: 'Register',
    component: userPage,
    path: '/user/register',
  },
];

export default routes;
