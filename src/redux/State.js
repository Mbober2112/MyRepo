import { rerenderEntireTree } from "../render";

let state = {
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
}

export let addPost = () => {
    let newPost = {
        id: 5,
        title: state.profilePage.newPostTitle,
        text: state.profilePage.newPostText,
        likes: 0,
        dislikes: 0
    }

    let newAllPost ={
        id: 5,
        username: "Username",
        title: state.profilePage.newPostTitle,
        text: state.profilePage.newPostText,
        likes: 0,
        dislikes: 0,
        saved: false
    }

    state.profilePage.myPostsData.push(newPost);
    state.allPostsPage.allPostsData.push(newAllPost);

    state.profilePage.newPostTitle = "";
    state.profilePage.newPostText = "";

    rerenderEntireTree(state);
}

export let changeNewPost = (newTitle, newText) => {
    state.profilePage.newPostTitle = newTitle;
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export let sendMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessageText,
    }

    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = "";

    rerenderEntireTree(state);
}

export let changeNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export default state;