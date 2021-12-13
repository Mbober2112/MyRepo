const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

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
                title: state.profilePage.newPostTitle,
                text: state.profilePage.newPostText,
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
                },
            }

        case CHANGE_NEW_POST:
            return {
                ...state,
                profilePage: {
                    ...state.profilePage,
                    newPostTitle: action.newTitle,
                    newPostText: action.newText,
                },
            }

        default:
            return state;
    }
}

export const addPost = () => ({ type: ADD_POST });
export const changeNewPost = (title, text) => ({ type: CHANGE_NEW_POST, newTitle: title, newText: text });

export default AddPostReducer;