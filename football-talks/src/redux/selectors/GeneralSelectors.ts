import { AppStateType } from "../reduxStore";

export const tokenSelector = (state: AppStateType) =>{
    return state.auth.token;
}

export const loginSelector = (state: AppStateType) =>{
    return state.auth.login;
}

export const passwordSelector = (state: AppStateType) =>{
    return state.auth.pass;
}

export const allPostsDataSelector = (state: AppStateType) =>{
    return state.addPostState.allPostsPage.allPostsData;
}