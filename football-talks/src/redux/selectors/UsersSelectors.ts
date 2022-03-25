import { AppStateType } from "../reduxStore"

export const allUsersSelector = (state: AppStateType) =>{
    return state.allUsersPage.allUsers;
}

export const pageSizeSelector = (state: AppStateType) =>{
    return state.allUsersPage.pageSize;
} 

export const TotalUsersCountSelector = (state: AppStateType) => {
    return state.allUsersPage.totalUsersCount;
}

export const currentPageSelector = (state: AppStateType) => {
    return state.allUsersPage.currentPage;
}

export const friendsSelector = (state: AppStateType) => {
    return state.allUsersPage.friends;
}