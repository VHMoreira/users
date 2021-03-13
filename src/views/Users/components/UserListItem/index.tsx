import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import User from '../../../../models/User';

import './styles.scss';

interface Props {
    user: User;
}

const UserListItem: React.FC<Props> = ({ children, user }) => {
    return (
        <Link
            key={user.id}
            className="item"
            to={`/user/${user.login}`}>

            <img className="item-avatar" src={user.avatar_url} alt="VHMoreira" />
            <div className="info">
                <span className="info-name">{user.login}</span>
                <span className="info-login">{user.html_url}</span>
            </div>
            <FaChevronRight size={25} />
        </Link>
    );
}

export default UserListItem;