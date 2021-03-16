import { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import api from "../../../services/api";


import { loadUsersSucces, loadUsersFailure } from "./actions";

export function* loadUsers() {
    try {
        const resp: AxiosResponse = yield call(api.get, 'users');
        yield put(loadUsersSucces(resp.data));
    } catch (error) {
        yield put(loadUsersFailure());
    }
}