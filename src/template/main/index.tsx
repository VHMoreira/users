import React, { useEffect } from 'react';

import Routes from '../../routes/routes';
import { useUser } from '../../providers/UserProvider';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../shared/components/Header';
import { MainContainer } from './styles';

const Main: React.FC = () => {
  const { loadUsers } = useUser();

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <MainContainer>
      <Router>
        <Header />
        <Routes />
      </Router>
    </MainContainer>
  );
}

export default Main;
