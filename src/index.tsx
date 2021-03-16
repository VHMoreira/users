import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import { Provider } from "react-redux";
import './shared/styles/global.scss';
import App from './template/main';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* <ToastProvider> */}
    {/* <UserProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </UserProvider> */}
    {/* </ToastProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
