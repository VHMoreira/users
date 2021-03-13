import React, { createContext, useState, useContext, useCallback } from 'react';
import { toast } from 'react-toastify';
import User from '../models/User';
import GithubClient from '../services/impl/github';

interface SearchRequest {
    login: string
}
interface UserContextData {
    users: User[];
    loadUsers(): Promise<void>;
    searchUsers(search: SearchRequest): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const githubClient = new GithubClient();

const UserProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const searchUsers = useCallback(async ({ login }: SearchRequest) => {
        const { status, data } = await githubClient.GET({ url: `/search/users?q=${login}` });
        const { items, total_count } = data;

        if (status !== 200 || total_count === 0) {
            toast('Não foi possivel encontrar o usuário');
            return
        }

        console.log(items);

        const formatUsers = items.map((item: any): User => {
            return {
                id: item.id,
                login: item.login,
                avatar_url: `${item.html_url}.png`,
                repos_url: item.repos_url,
                starred_url: item.starred_url,
                url: item.url,
                html_url: item.html_url
            }
        });

        setUsers(formatUsers);
    }, []);

    const loadUsers = useCallback(async (): Promise<void> => {
        const { status, data } = await githubClient.GET({ url: '/users?per_page=10' });

        if (status !== 200) {
            toast('Não foi possivel fazer o carregamento dos usuários');
        }

        const formatUsers = data.map((item: any): User => {
            return {
                id: item.id,
                login: item.login,
                avatar_url: `${item.html_url}.png`,
                repos_url: item.repos_url,
                starred_url: item.starred_url,
                url: item.url,
                html_url: item.html_url
            }
        });

        setUsers(formatUsers);
    }, [])


    return (
        <UserContext.Provider value={{ users, loadUsers, searchUsers }}>
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