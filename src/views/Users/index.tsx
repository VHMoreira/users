import React from 'react';
import List from '../../shared/components/List';
import UserListItem from './components/UserListItem';

import './styles.scss';

const Users: React.FC = () => {
    return (
        <section className="users">
            <List>
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
                <UserListItem />
            </List>
        </section>
    );
}

export default Users;