import userPage from 'pages/userPage';
import homePage from 'pages/homePage';
import universityPage from 'pages/universityPage';

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
  {
    name: 'University',
    component: universityPage,
    path: '/university/:id',
  },
];

export default routes;
