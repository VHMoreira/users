import React from 'react';
import { User } from '../../../../models/User';
import { ProfileContainer } from './styles';


interface Props {
    user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {

    return (
        <ProfileContainer>
            <img className="profile-avatar" src={user.picture.medium} alt={user.name.first} />
            <span className="profile-name" >{`${user.name.first} ${user.name.last}`}</span>
            {/* <section className="profile-stats">
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
            </section> */}
        </ProfileContainer>
    );
}

export default UserProfile;