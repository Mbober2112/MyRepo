const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

const AddPostReducer = (state, action) => {
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

            state.profilePage.myPostsData.unshift(newPost);
            state.allPostsPage.allPostsData.unshift(newAllPost);

            state.profilePage.newPostTitle = "";
            state.profilePage.newPostText = "";

            return state;

        case CHANGE_NEW_POST:
            state.profilePage.newPostTitle = action.newTitle;
            state.profilePage.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const changeNewPostActionCreator = (title, text) => ({ type: CHANGE_NEW_POST, newTitle: title, newText: text });

export default AddPostReducer;