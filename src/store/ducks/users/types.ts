import { User } from "../../../models/User";

export enum UsersTypes {
    LOAD_USERS_REQUEST = '@users/LOAD_USERS_REQUEST',
    LOAD_USERS_SUCCESS = '@users/LOAD_USERS_SUCCESS',
    LOAD_USERS_FAILURE = '@users/LOAD_USERS_FAILURE',
    SEARCH_USERS_REQUEST = '@users/SEARCH_USERS_REQUEST',
    SEARCH_USERS_SUCCESS = '@users/SEARCH_USERS_SUCCESS',
    SEARCH_USERS_FAILURE = '@users/SEARCH_USERS_FAILURE',
    FIND_USER_REQUEST = '@users/FIND_USERS_REQUEST',
    FIND_USER_SUCCESS = '@users/FIND_USERS_SUCCESS',
    FIND_USER_FAILURE = '@users/SEARCH_USERS_FAILURE'
};

export interface UsersState {
    readonly data: User[];
    readonly loading: boolean;
    readonly error: boolean;
}