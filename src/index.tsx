import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProvider } from 'react-toast-notifications';
import { UserProvider } from './providers/UserProvider';
import './shared/styles/global.scss';
import App from './template/main';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
