import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import User from '../models/User';
import GithubClient from '../services/impl/github';

interface UserContextData {
    users: User[];
    loadUsers(): Promise<void>;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const githubClient = new GithubClient();

const UserProvider: React.FC = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    const loadUsers = async (): Promise<void> => {
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
    }


    return (
        <UserContext.Provider value={{ users, loadUsers }}>
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