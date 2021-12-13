import AddPostReducer from "./addPostReducer";
import DialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            myPostsData: [
                { id: 4, title: "Пост 4", text: "Текст", likes: 12, dislikes: 3 },
                { id: 3, title: "Пост 3", text: "Текст", likes: 16, dislikes: 5 },
                { id: 2, title: "Пост 2", text: "Текст", likes: 21, dislikes: 8 },
                { id: 1, title: "Пост 1", text: "Текст", likes: 16, dislikes: 2 },
            ],
            newPostTitle: "",
            newPostText: "",
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Pavel" },
                { id: 2, name: "Petr" },
                { id: 3, name: "Dima" },
                { id: 4, name: "Anton" },
            ],
            messagesData: [
                { id: 1, message: "Hello" },
                { id: 2, message: "Hi" },
                { id: 3, message: "How are you?" },
                { id: 4, message: "Bye" },
            ],
            newMessageText: "",
        },
        allPostsPage: {
            allPostsData: [
                { id: 4, username: "Pavel", title: "Заголовок 4", text: "Текст", likes: 12, dislikes: 3, saved: true },
                { id: 3, username: "Petr", title: "Заголовок 3", text: "Текст", likes: 16, dislikes: 5, saved: false },
                { id: 2, username: "Dima", title: "Заголовок 2", text: "Текст", likes: 21, dislikes: 8, saved: false },
                { id: 1, username: "Anton", title: "Заголовок 1", text: "Текст", likes: 16, dislikes: 2, saved: true },
            ],
        }, 
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state = AddPostReducer(this._state, action);
        this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;
