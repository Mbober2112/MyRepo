import { UsersApi } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_FRIEND = 'users/SET-FRIEND';

let initialState = {
    allUsers: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1, 
    friends: [],  
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                friends: [...state.friends, {id: action.userId}],
            }
        
        case UNFOLLOW: 
            let current;
            for (let i=0; i<state.friends.length; i++) {
                if (state.friends[i].id === action.userId) {
                    current = i;
                }
            }
            state.friends.splice(current,1);
            return {
                ...state,
                friends: [...state.friends],
            }
        case SET_USERS: 
            return {...state, allUsers: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};

        case SET_FRIEND:
            return {...state, friends: action.friend};    
        
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};    
        
        default:
            return state;
    }
}

export const follow = (id) => ({ type: FOLLOW, userId: id, });
export const unfollow = (id) => ({ type: UNFOLLOW, userId: id, });
export const setUsers = (users) => ({ type: SET_USERS, users: users, });
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber, });
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount, });
export const setFriend = (friend) => ({ type: SET_FRIEND, friend: friend, });

export const getUsers = (pageSize, currentPage, token) => {
    return async (dispatch) => {
        let data = await UsersApi.getUsers(pageSize, currentPage, token);
            dispatch(setUsers(data.usersSend));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setFriend(data.currentUser.friends));
    }
}

export const followTC = (token, id) => {
    return async (dispatch) => {
        let result = await UsersApi.followUser(token, id);
            if (result === 'ok'){
                dispatch(follow(id));
            }
    }
}

export const unfollowTC = (token, id) => {
    return async (dispatch) => {
        let result = await UsersApi.unfollowUser(token, id);
            if (result === 'ok'){
                dispatch(unfollow(id));
            } 
    }
}

export default UsersReducer;