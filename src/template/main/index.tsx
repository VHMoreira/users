import React from 'react';

import Header from './components/Header';
import Routes from '../../routes/routes';

import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const Main: React.FC = () => {
  return (
    <main className="main">
      <Header />
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

export default Main;
