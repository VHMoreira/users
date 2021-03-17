import React, { useEffect, useState } from 'react';
import { FaFolder, FaStar } from 'react-icons/fa';
import { useRouteMatch } from 'react-router-dom';
// import Repository from '../../models/Repository';
import { User } from '../../models/User';
import List from '../../shared/components/List';
import UserProfile from './components/UserProfile';
import { TabButton, Tabs, UserDetailContainer } from './styles';
interface UserDetailParams {
    username: string;
}

const UserDetails: React.FC = () => {
    const { params } = useRouteMatch<UserDetailParams>();
    const [selectedTab, setSelectedTab] = useState(0);
    const [user, setUsers] = useState<User>({} as User);

    useEffect(() => {
        // getUserDetail(params.username).then(({ user, repos, starred }) => {
        //     setUsers(user);
        //     // setRepos(repos);
        //     // setStarred(starred);
        // });
    }, [params.username]);

    // const SelectedList = () => {
    // switch (selectedTab) {
    //     case 1:
    //         return (
    //             <>
    //                 {starred.map(star => <RepositoryListItem key={star.id} repository={star} />)}
    //             </>
    //         );
    //     default:
    //         return (
    //             <>
    //                 {repos.map(repo => <RepositoryListItem key={repo.id} repository={repo} />)}
    //             </>
    //         );
    // }
    // }

    return (
        <UserDetailContainer>
            <UserProfile user={user} />
            <Tabs className="user-tabs">
                <TabButton
                    onClick={() => setSelectedTab(0)}
                    className={`user-tabs__button ${selectedTab === 0 && 'user-tabs__button--active'}`}>
                    <FaFolder />
                    Pessoal
                </TabButton>
                <TabButton
                    onClick={() => setSelectedTab(1)}
                    className={`user-tabs__button ${selectedTab === 1 && 'user-tabs__button--active'}`}>
                    <FaStar />
                    Endereço
                </TabButton>
                <TabButton
                    onClick={() => setSelectedTab(1)}
                    className={`user-tabs__button ${selectedTab === 1 && 'user-tabs__button--active'}`}>
                    <FaStar />
                    Contato
                </TabButton>
            </Tabs>
            <section className='user-repository'>
                <List>
                    {/* <SelectedList /> */}
                </List>
            </section>
        </UserDetailContainer>
    );
}

export default UserDetails;