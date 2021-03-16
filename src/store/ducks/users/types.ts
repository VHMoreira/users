import { User } from "../../../models/User";

export enum UsersTypes {
    LOAD_USERS_REQUEST = '@users/LOAD_USERS_REQUEST',
    LOAD_USERS_SUCCESS = '@users/LOAD_USERS_SUCCESS',
    LOAD_USERS_FAILURE = '@users/LOAD_USERS_FAILURE'
};

export interface UsersState {
    readonly data: User[];
    readonly loading: boolean;
    readonly error: boolean;
}