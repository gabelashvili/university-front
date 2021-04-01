import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/root/App';
import Store from 'helpers/store';
import { Provider } from 'react-redux';

const store = Store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
