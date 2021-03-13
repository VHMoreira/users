import React from 'react';

import './styles.scss';

const List: React.FC = ({ children }) => {
    return (
        <ul className="list">
            {children}
        </ul>
    );
}

export default List;