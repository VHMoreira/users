import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

import './styles.scss';

const UserListItem: React.FC = ({ children }) => {
    return (
        <li className="item">
            <img className="item-avatar" src="https://github.com/VHMoreira.png" alt="VHMoreira" />
            <div className="info">
                <span className="info-name">Vitor Henrique de Souza</span>
                <span className="info-login">VHMoreira</span>
            </div>
            <FaChevronRight size={25} />
        </li>
    );
}

export default UserListItem;