import { action } from "typesafe-actions";
import { UsersTypes } from './types';
import { User } from '../../../models/User';

export const loadUsersRequest = () => action(UsersTypes.LOAD_USERS_REQUEST);
export const loadUsersSucces = (data: User[]) => action(UsersTypes.LOAD_USERS_SUCCESS, { data });
export const loadUsersFailure = () => action(UsersTypes.LOAD_USERS_FAILURE);

export const searchUsersRequest = (name: string) => action(UsersTypes.SEARCH_USERS_REQUEST, name);
export const searchUsersSucces = (data: User[]) => action(UsersTypes.SEARCH_USERS_SUCCESS, { data });
export const searchUsersFailure = () => action(UsersTypes.SEARCH_USERS_FAILURE);
