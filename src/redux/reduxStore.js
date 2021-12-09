import { combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import DialogsReducer from './dialogsReducer';
import UsersReducer from "./usersReducer";

let reducers = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
    allUsersPage: UsersReducer,
});

let store = createStore(reducers);

export default store;