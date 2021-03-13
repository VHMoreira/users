import React, { useEffect, useState } from 'react';
import { FaFolder, FaStar } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
import Repository from '../../models/Repository';
import User from '../../models/User';
import { useUser } from '../../providers/UserProvider';
import List from '../../shared/components/List';
import RepositoryListItem from './components/RepositoryListItem';
import UserProfile from './components/UserProfile';

import './styles.scss';

interface UserDetailParams {
    username: string;
}

const UserDetails: React.FC = () => {
    const { params } = useRouteMatch<UserDetailParams>();
    const { getUserDetail } = useUser();
    const [selectedTab, setSelectedTab] = useState(0);
    const [user, setUsers] = useState<User>({} as User);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [starred, setStarred] = useState<Repository[]>([]);

    useEffect(() => {
        getUserDetail(params.username).then(({ user, repos, starred }) => {
            setUsers(user);
            setRepos(repos);
            setStarred(starred);
        });
    }, [params.username, getUserDetail]);

    const SelectedList = () => {
        switch (selectedTab) {
            case 1:
                return (
                    <>
                        {starred.map(star => <RepositoryListItem key={star.id} repository={star} />)}
                    </>
                );
            default:
                return (
                    <>
                        {repos.map(repo => <RepositoryListItem key={repo.id} repository={repo} />)}
                    </>
                );
        }
    }

    return (
        <section className="user">
            <UserProfile user={user} />
            <nav className="tabs">
                <span
                    onClick={() => setSelectedTab(0)}
                    className={`tabs-button ${selectedTab === 0 && 'tabs-button--active'}`}>
                    <FaFolder />
                    Repositórios
                </span>
                <span
                    onClick={() => setSelectedTab(1)}
                    className={`tabs-button ${selectedTab === 1 && 'tabs-button--active'}`}>
                    <FaStar />
                    Curtidos
                </span>
            </nav>
            <section className='repository'>
                <List>
                    <SelectedList />
                </List>
            </section>
        </section>
    );
}

export default UserDetails;