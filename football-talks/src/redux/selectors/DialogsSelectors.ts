import { AppStateType } from "../reduxStore";

export const dialogsDataSelector = (state: AppStateType) =>{
    return state.dialogsPage.dialogsData;
}

export const messagesDataSelector = (state: AppStateType) =>{
    return state.dialogsPage.messagesData;
}
