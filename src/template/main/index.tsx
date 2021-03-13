import React, { useEffect } from 'react';

import Header from './components/Header';
import Routes from '../../routes/routes';
import { useUser } from '../../providers/UserProvider';

import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';

const Main: React.FC = () => {
  const { loadUsers } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <main className="main">
      <Router>
        <Header />
        <Routes />
      </Router>
    </main>
  );
}

export default Main;
