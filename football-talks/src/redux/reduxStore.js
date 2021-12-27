import { applyMiddleware, combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import AuthReducer from "./authReducer";
import DialogsReducer from './dialogsReducer';
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let reducers = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
    allUsersPage: UsersReducer,
    profilePageData: ProfileReducer,
    auth: AuthReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;