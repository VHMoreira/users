import React from 'react';
import { useUser } from '../../providers/UserProvider';
import List from '../../shared/components/List';
import UserListItem from './components/UserListItem';

import './styles.scss';

const Users: React.FC = () => {
    const { users } = useUser();
    return (
        <section className="users">
            <List>
                {users.map(user => <UserListItem key={user.id} user={user} />)}
            </List>
        </section>
    );
}

export default Users;