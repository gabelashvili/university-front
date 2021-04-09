import userPage from 'pages/userPage';

export const routes = [
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
