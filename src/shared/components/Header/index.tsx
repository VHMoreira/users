import React from 'react';

import OctoImage from '../../../assets/octo.png';
import SearchField from '../SearchField';
import Title from '../Title';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <img src={OctoImage} alt="octo_with_glass" />
            <Title />
            <SearchField />
        </HeaderContainer>
    );
}

export default Header;
