import React from 'react';
import { Link } from 'react-router-dom';
import { TitleContainer } from './styles';


const Title: React.FC = () => {
    return (
        <TitleContainer>
            <Link to="/">
                GitView
            </Link>
        </TitleContainer>
    );
}

export default Title;
