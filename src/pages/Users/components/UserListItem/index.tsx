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

            <img className="item-avatar" src={user.avatar_url} alt={user.login} />
            <div className="item-info">
                <span className="item-info__name">{user.login}</span>
                <span className="item-info__login">{user.html_url}</span>
            </div>
            <FaChevronRight size={25} />
        </Link>
    );
}

export default UserListItem;