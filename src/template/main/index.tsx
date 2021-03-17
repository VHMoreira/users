import React from 'react';

import Routes from '../../routes/routes';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../../shared/components/Header';
import { MainContainer } from './styles';

const Main: React.FC = () => {

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
