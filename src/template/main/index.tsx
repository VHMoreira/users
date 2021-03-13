import React, { useEffect } from 'react';

import Routes from '../../routes/routes';
import { useUser } from '../../providers/UserProvider';

import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../shared/components/Header';

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
