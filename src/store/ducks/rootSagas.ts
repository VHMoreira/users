import { all, takeLatest } from "@redux-saga/core/effects";
import { loadUsers, searchUsers } from "./users/sagas";
import { UsersTypes } from "./users/types";

export default function* rootSaga(): any {
    return yield all([
        takeLatest(UsersTypes.LOAD_USERS_REQUEST, loadUsers),
        takeLatest(UsersTypes.SEARCH_USERS_REQUEST, searchUsers),
    ]);
}