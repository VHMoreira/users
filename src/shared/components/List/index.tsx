import React from 'react';
import { ListContainer } from './styles';

const List: React.FC = ({ children }) => {
    return (
        <ListContainer>
            {children}
        </ListContainer>
    );
}

export default List;