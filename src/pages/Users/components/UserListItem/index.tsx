import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { User } from '../../../../models/User';
import { capitalize } from '../../../../shared/utils/capitalize';
import { titleize } from '../../../../shared/utils/titleize';
import { Avatar, Info, InfoAge, InfoDetail, InfoName, Item } from './styles';
interface Props {
    user: User;
}

const UserListItem: React.FC<Props> = ({ user }) => {
    return (
        <Item>
            <Avatar src={user.picture.medium} alt={user.name.first} />
            <Info >
                <InfoName>{`${capitalize(user.name.first)} ${capitalize(user.name.last)}`}</InfoName>
                <InfoDetail>
                    <InfoAge>{user.registered.age} anos</InfoAge>
                    <InfoAge>{capitalize(user.gender)}</InfoAge>
                </InfoDetail>
                <InfoAge>{titleize(user.location.city)} - {titleize(user.location.state)}</InfoAge>
            </Info>
            <FaChevronRight size={25} />
        </Item>
    );
}

export default UserListItem;