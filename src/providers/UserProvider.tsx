import React, { createContext, useState, useContext, useCallback } from 'react';
import { useToasts } from 'react-toast-notifications';
import Repository from '../models/Repository';
import { User } from '../models/User';
import GithubClient from '../services/impl/github';

interface SearchRequest {
    name: string
}

interface DetailsResponse {
    user: User;
    repos: Repository[];
    starred: Repository[];
}
interface UserContextData {
    users: User[];
    loadUsers(): Promise<void>;
    searchUsers(search: SearchRequest): Promise<void>;
    getUserDetail(username: string): Promise<DetailsResponse>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const githubClient = new GithubClient();

const UserProvider: React.FC = ({ children }) => {
    const { addToast } = useToasts();
    const [users, setUsers] = useState<User[]>([]);

    const getUserDetail = useCallback(async (username: string): Promise<DetailsResponse> => {
        const [userResponse, reposResponse, starredResponse] = await Promise.all([
            githubClient.GET({ url: `https://api.github.com/users/${username}` }),
            githubClient.GET({ url: `https://api.github.com/users/${username}/repos` }),
            githubClient.GET({ url: `https://api.github.com/users/${username}/starred` })
        ]);

        const { status: userStatus, data: userData } = userResponse;
        const { status: reposStatus, data: reposData } = reposResponse;
        const { status: starredStatus, data: starredData } = starredResponse;

        if (userStatus !== 200) {
            addToast('Não foi possivel encontrar o usuário', {
                appearance: 'error'
            });
        }

        if (reposStatus !== 200) {
            addToast('Não foi possivel encontrar repositórios do usuário', {
                appearance: 'error'
            });
        }

        if (starredStatus !== 200) {
            addToast('Não foi possivel encontrar favoritos o usuário', {
                appearance: 'error'
            });
        }

        return {
            user: userData,
            repos: reposData,
            starred: starredData
        };
    }, [addToast]);

    const searchUsers = useCallback(async ({ name }: SearchRequest) => {
        if (name.length > 3) {


            const { status: userStatus, data: userData } = await githubClient.GET({ url: `/search/users?q=${name}` });

            const { items: userItems } = userData;

            if (userStatus !== 200) {
                addToast('Não foi possivel encontrar o usuário', {
                    appearance: 'error',
                    autoDismiss: true,
                    onDismiss: () => {
                        document.location.reload();
                    }
                });
                return
            }

            setUsers(userItems);
        }
    }, [addToast]);

    const loadUsers = useCallback(async (): Promise<void> => {
        const { status, data } = await githubClient.GET({ url: '/users?per_page=100' });

        if (status !== 200) {
            addToast('Não foi possivel fazer o carregamento dos usuários', {
                appearance: 'error'
            });
        }

        setUsers(data);
    }, [addToast])


    return (
        <UserContext.Provider value={{ users, loadUsers, searchUsers, getUserDetail }}>
            {children}
        </UserContext.Provider>
    );
};

function useUser(): UserContextData {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error('useUser must be used within an UserProvider');
    }

    return context;
}

export { UserProvider, useUser };