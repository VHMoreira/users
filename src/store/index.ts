import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './ducks/rootReducer';
import rootSaga from "./ducks/rootSagas";
import { UsersState } from "./ducks/users/types";

export interface ApplicationState {
    users: UsersState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;