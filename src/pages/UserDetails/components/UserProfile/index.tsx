import React from 'react';
import { FaFolder } from 'react-icons/fa';
import { RiUserReceived2Fill, RiUserSharedFill } from 'react-icons/ri'
import User from '../../../../models/User';


import './styles.scss';

interface Props {
    user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {

    return (
        <section className="profile">
            <img className="profile-avatar" src={user.avatar_url} alt={user.name} />
            <a className="profile-name" href={user.html_url}>{user.name}</a>
            <section className="profile-stats">
                <span className="profile-stats__numbers">
                    <FaFolder size={20} />
                    {user.public_repos}
                </span>
                <span className="profile-stats__numbers">
                    <RiUserReceived2Fill size={20} />
                    {user.followers}
                </span>
                <span className="profile-stats__numbers">
                    <RiUserSharedFill size={20} />
                    {user.following}
                </span>
            </section>
        </section>
    );
}

export default UserProfile;