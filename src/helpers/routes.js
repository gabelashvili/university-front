import userPage from 'pages/userPage';

export const routes = [
  {
    name: 'Login',
    component: userPage,
    path: '/user/:type',
  },
];

export default routes;
