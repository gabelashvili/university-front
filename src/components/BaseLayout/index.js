import React from 'react';
import {
  Link,
} from 'react-router-dom';
import routes from 'helpers/routes';

const BaseLayout = ({ children }) => (
  <div>
    BaseLayout
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
    {children}
  </div>
);

export default BaseLayout;
