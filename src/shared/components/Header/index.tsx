import React from 'react';

import OctoImage from '../../../assets/octo.png';
import SearchField from '../SearchField';
import Title from '../Title';

import './styles.scss';

const Header: React.FC = () => {
    return (
        <header className="header">
            <img className="header-img" src={OctoImage} alt="octo_with_glass" />
            <Title />
            <SearchField />
        </header>
    );
}

export default Header;
