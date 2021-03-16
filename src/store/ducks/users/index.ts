import { UsersState, UsersTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: UsersState = {
    data: [],
    error: false,
    loading: false
}

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UsersTypes.LOAD_USERS_REQUEST:
            return { ...state, loading: true }
        case UsersTypes.LOAD_USERS_SUCCESS:
            return { ...state, loading: true, error: false, data: action.payload.data }
        case UsersTypes.LOAD_USERS_FAILURE:
            return { ...state, loading: false, error: true, data: [] }
        default:
            return state;
    }
}

export default reducer;