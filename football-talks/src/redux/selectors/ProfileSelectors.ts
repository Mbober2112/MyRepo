import { AppStateType } from "../reduxStore";

export const myPostsDataSelector = (state: AppStateType) =>{
    return state.addPostState.profilePage.myPostsData;
}

export const profileSelector = (state: AppStateType) =>{
    return state.profilePageData.profile;
}
