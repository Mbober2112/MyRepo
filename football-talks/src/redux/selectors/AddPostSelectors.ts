import { AppStateType } from "../reduxStore";

export const newPostTitleSelector = (state: AppStateType) =>{
    return state.addPostState.profilePage.newPostTitle;
}

export const newPostTextSelector = (state: AppStateType) =>{
    return state.addPostState.profilePage.newPostText;
}
