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
    name: 'Authentication',
    component: userPage,
    path: '/user/:type',
  },
  {
    name: 'University',
    component: universityPage,
    path: '/university/:id/:tabName',
  },
];

export default routes;
