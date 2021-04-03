import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'components/root/App';
import Store from 'helpers/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import themes from 'helpers/themes';

const store = Store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themes}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
