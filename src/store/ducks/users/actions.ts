import { action } from "typesafe-actions";
import { UsersTypes } from './types';
import { User } from '../../../models/User';

export const loadUsersRequest = () => action(UsersTypes.LOAD_USERS_REQUEST);
export const loadUsersSucces = (data: User[]) => action(UsersTypes.LOAD_USERS_SUCCESS, { data });
export const loadUsersFailure = () => action(UsersTypes.LOAD_USERS_FAILURE);
