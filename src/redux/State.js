const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SEND_MESSAGE = 'SEND-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let store = {
    _state: {
        profilePage: {
            myPostsData: [
                { id: 1, title: "Пост 1", text: "Текст", likes: 12, dislikes: 3 },
                { id: 2, title: "Пост 2", text: "Текст", likes: 16, dislikes: 5 },
                { id: 3, title: "Пост 3", text: "Текст", likes: 21, dislikes: 8 },
                { id: 4, title: "Пост 4", text: "Текст", likes: 16, dislikes: 2 },
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
                { id: 1, username: "Pavel", title: "Заголовок 1", text: "Текст", likes: 12, dislikes: 3, saved: true },
                { id: 2, username: "Petr", title: "Заголовок 2", text: "Текст", likes: 16, dislikes: 5, saved: false },
                { id: 3, username: "Dima", title: "Заголовок 3", text: "Текст", likes: 21, dislikes: 8, saved: false },
                { id: 4, username: "Anton", title: "Заголовок 4", text: "Текст", likes: 16, dislikes: 2, saved: true },
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
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                title: this._state.profilePage.newPostTitle,
                text: this._state.profilePage.newPostText,
                likes: 0,
                dislikes: 0
            }
        
            let newAllPost ={
                id: 5,
                username: "Username",
                title: this._state.profilePage.newPostTitle,
                text: this._state.profilePage.newPostText,
                likes: 0,
                dislikes: 0,
                saved: false
            }
        
            this._state.profilePage.myPostsData.push(newPost);
            this._state.allPostsPage.allPostsData.push(newAllPost);
        
            this._state.profilePage.newPostTitle = "";
            this._state.profilePage.newPostText = "";
        
            this._callSubscriber(this._state);
        } else if(action.type === CHANGE_NEW_POST){
            this._state.profilePage.newPostTitle = action.newTitle;
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText,
            }
        
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
        
            this._callSubscriber(this._state);
        }else if(action.type === CHANGE_NEW_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newMessage;
            this._callSubscriber(this._state);
        }
    },
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostActionCreator = (title, text) => ({type: CHANGE_NEW_POST, newTitle: title, newText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMessageActionCreator = (message) => ({type: CHANGE_NEW_MESSAGE, newMessage: message});

export default store;