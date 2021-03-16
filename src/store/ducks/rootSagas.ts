import { all, takeLatest } from "@redux-saga/core/effects";
import { User } from "../../models/User";
import { loadUsers } from "./users/sagas";
import { UsersTypes } from "./users/types";

export default function* rootSaga(): any {
    return yield all([
        takeLatest(UsersTypes.LOAD_USERS_REQUEST, loadUsers)
    ]);
}