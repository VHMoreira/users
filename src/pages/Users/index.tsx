import React from 'react';
import { useUser } from '../../providers/UserProvider';
import List from '../../shared/components/List';
import UserListItem from './components/UserListItem';
import { UsersContainer } from './styles';

const Users: React.FC = () => {
    const { users } = useUser();
    return (
        <UsersContainer>
            <List>
                {users.map(user => <UserListItem key={user.email} user={user} />)}
            </List>
        </UsersContainer>
    );
}

export default Users;