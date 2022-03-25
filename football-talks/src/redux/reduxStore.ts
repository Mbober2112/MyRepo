import { applyMiddleware, combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import AuthReducer from "./authReducer";
import DialogsReducer from './dialogsReducer';
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import { addPostWatcher, authWatcher, followWatcher, getUsersWatcher, setProfileWatcher, setStatusWatcher, unfollowWatcher} from "./sagas";

let rootReducer = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
    allUsersPage: UsersReducer,
    profilePageData: ProfileReducer,
    auth: AuthReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware));
sagaMiddleware.run(authWatcher);
sagaMiddleware.run(getUsersWatcher);
sagaMiddleware.run(followWatcher);
sagaMiddleware.run(unfollowWatcher);
sagaMiddleware.run(setProfileWatcher);
sagaMiddleware.run(setStatusWatcher);
sagaMiddleware.run(addPostWatcher);

export default store;