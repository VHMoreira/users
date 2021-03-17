import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";

import { loadUsersSucces, loadUsersFailure, searchUsersFailure, searchUsersSucces, Query } from "./actions";

export function* loadUsers({ payload }: ReturnType<any>) {
    try {
        let url = `users?_page=${payload.page}`;

        if (payload.query) {
            url = payload.query.cell ? url + `&cell_like=${payload.query.cell}` : url;
            url = payload.query.state ? url + `&location.state_like=${payload.query.state}` : url;
        }

        const resp: AxiosResponse = yield call(api.get, url);
        yield put(loadUsersSucces(resp.data));
    } catch (error) {
        console.log(error);
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