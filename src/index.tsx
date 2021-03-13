import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import { UserProvider } from './providers/UserProvider';
import './shared/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import App from './template/main';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
      <ToastContainer />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
