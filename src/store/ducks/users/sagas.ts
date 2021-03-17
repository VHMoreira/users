import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadUsersSucces, loadUsersFailure, searchUsersFailure, searchUsersSucces } from "./actions";

export function* loadUsers({ payload }: ReturnType<any>) {
    try {
        const resp: AxiosResponse = yield call(api.get, `users?_page=${payload}`);
        yield put(loadUsersSucces(resp.data));
    } catch (error) {
        yield put(loadUsersFailure());
    }
}

export function* searchUsers({ payload }: ReturnType<any>) {
    try {
        const resp: AxiosResponse = yield call(api.get, `users?name.first_like=${payload}`);
        yield put(searchUsersSucces(resp.data));
    } catch (error) {
        yield put(searchUsersFailure());
    }
}

export function* findUser({ payload }: ReturnType<any>) {
    try {
        const resp: AxiosResponse = yield call(api.get, `users?name.first_like=${payload}`);
        yield put(searchUsersSucces(resp.data));
    } catch (error) {
        yield put(searchUsersFailure());
    }
}