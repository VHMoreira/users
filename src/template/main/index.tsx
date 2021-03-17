import React from 'react';

import Users from '../../pages/Users';
import Header from '../../shared/components/Header';
import { MainContainer } from './styles';

const Main: React.FC = () => {

  return (
    <MainContainer>
      <Header />
      <Users />
    </MainContainer>
  );
}

export default Main;
