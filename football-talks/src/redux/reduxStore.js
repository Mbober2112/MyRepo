import { applyMiddleware, combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import AuthReducer from "./authReducer";
import DialogsReducer from './dialogsReducer';
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
    allUsersPage: UsersReducer,
    profilePageData: ProfileReducer,
    auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;