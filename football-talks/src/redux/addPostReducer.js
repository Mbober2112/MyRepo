import { actionTypes } from "redux-form";
import { AddPostApi } from "../api/api";

const ADD_POST = 'addPost/ADD-POST';
const CHANGE_NEW_POST = 'addPost/CHANGE-NEW-POST';
const CHANGE_POST_ADDED = 'addPost/CHANGE-POST-ADDED';

let initialState = {
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
    allPostsPage: {
        allPostsData: [
            { id: 4, username: "Pavel", title: "Заголовок 4", text: "Текст", likes: 12, dislikes: 3, saved: true },
            { id: 3, username: "Petr", title: "Заголовок 3", text: "Текст", likes: 16, dislikes: 5, saved: false },
            { id: 2, username: "Dima", title: "Заголовок 2", text: "Текст", likes: 21, dislikes: 8, saved: false },
            { id: 1, username: "Anton", title: "Заголовок 1", text: "Текст", likes: 16, dislikes: 2, saved: true },
        ],
        postAdded: false,
    },
}

const AddPostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                title: state.profilePage.newPostTitle,
                text: state.profilePage.newPostText,
                likes: 0,
                dislikes: 0
            }

            let newAllPost = {
                id: 5,
                username: "Username",
                title: action.title,
                text: action.text,
                likes: 0,
                dislikes: 0,
                saved: false
            }

            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPostTitle: '',
                    newPostText: '',
                    myPostsData: [newPost, ...state.profilePage.myPostsData],
                },
                allPostsPage: {
                    ...state.allPostsPage,
                    allPostsData: [newAllPost, ...state.allPostsPage.allPostsData],
                    postAdded: true,
                },
            }
        case CHANGE_POST_ADDED:
            return {
                ...state,
                allPostsPage: {
                    ...state.allPostsPage,
                    postAdded: false,
                },
            }

        default:
            return state;
    }
}

export const addPost = (title, text) => ({ type: ADD_POST, title: title, text: text });
export const postAddedChange = () => ({ type: CHANGE_POST_ADDED, });

export default AddPostReducer;