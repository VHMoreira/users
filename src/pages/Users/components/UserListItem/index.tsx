import React from 'react';
import { User } from '../../../../models/User';
import { capitalize } from '../../../../shared/utils/capitalize';
import { titleize } from '../../../../shared/utils/titleize';
import { Avatar, Info, InfoCell, InfoName, Item } from './styles';
interface Props {
    user: User;
}

const UserListItem: React.FC<Props> = ({ user }) => {
    return (
        <Item>
            <Avatar src={user.picture.medium} alt={user.name.first} />
            <Info >
                <InfoName>{`${capitalize(user.name.first)} ${capitalize(user.name.last)}`}</InfoName>
                <InfoCell>{user.cell}</InfoCell>
                <InfoCell>{titleize(user.location.city)} - {titleize(user.location.state)}</InfoCell>
            </Info>
        </Item>
    );
}

export default UserListItem;