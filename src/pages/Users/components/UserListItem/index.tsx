import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { User } from '../../../../models/User';
import { Avatar, Info, InfoAge, InfoName, Item } from './styles';
interface Props {
    user: User;
}

const UserListItem: React.FC<Props> = ({ user }) => {
    return (
        <Item>
            <Avatar src={user.picture.medium} alt={user.name.first} />
            <Info >
                <InfoName>{`${user.name.first} ${user.name.last}`}</InfoName>
                <InfoAge>{user.registered.age} anos</InfoAge>
            </Info>
            <FaChevronRight size={25} />
        </Item>
    );
}

export default UserListItem;