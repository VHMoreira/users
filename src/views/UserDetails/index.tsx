import React, { useEffect, useState } from 'react';
import { FaFolder, FaStar } from 'react-icons/fa';
import { RiUserReceived2Fill, RiUserSharedFill } from 'react-icons/ri'
import { useRouteMatch } from 'react-router-dom';
import Repository from '../../models/Repository';
import User from '../../models/User';
import { useUser } from '../../providers/UserProvider';
import List from '../../shared/components/List';
import UserProfile from './components/UserProfile';

import './styles.scss';

interface UserDetailParams {
    username: string;
}

const UserDetails: React.FC = () => {
    const { params } = useRouteMatch<UserDetailParams>();
    const { getUserDetail } = useUser();
    const [user, setUsers] = useState<User>({} as User);
    const [repos, setRepos] = useState<Repository>({} as Repository);
    const [starred, setStarred] = useState<Repository>({} as Repository);

    useEffect(() => {
        getUserDetail(params.username).then(({ user, repos, starred }) => {
            setUsers(user);
            setRepos(repos);
            setStarred(starred);
        });
    }, [params.username]);

    return (
        <section className="user">
            <UserProfile user={user} />
        </section>
    );
}

export default UserDetails;