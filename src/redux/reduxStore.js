import { combineReducers, createStore } from "redux";
import AddPostReducer from './addPostReducer';
import DialogsReducer from './dialogsReducer';

let reducers = combineReducers({
    addPostState: AddPostReducer,
    dialogsPage: DialogsReducer,
});

let store = createStore(reducers);

export default store;