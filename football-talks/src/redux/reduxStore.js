import { combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import AuthReducer from "./authReducer";
import DialogsReducer from './dialogsReducer';
import ProfileReducer from "./profileReducer";
import UsersReducer from "./usersReducer";

let reducers = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
    allUsersPage: UsersReducer,
    profilePageData: ProfileReducer,
    auth: AuthReducer,
});

let store = createStore(reducers);

export default store;