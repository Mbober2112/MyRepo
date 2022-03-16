import { UsersApi } from "../api/api";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_FRIEND = 'users/SET-FRIEND';

type PostType = {
    title: string,
    text: string,
    likes: number,
    dislikes: number,
}
type UserType = {
    club: string,
    followed: boolean,
    friends?: Array<FriendType>,
    id: number,
    name: string,
    pass: string,
    posts?: Array<PostType>
    postsCounter: number
    raiting: number,
    status: string,
    token: string,
}
type FriendType = {
    id: number,
}
let initialState = {
    allUsers: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUsersCount: 0 as number,
    currentPage: 1 as number, 
    friends: [] as Array<FriendType>,  
}

type InitialStateType = typeof initialState;

const UsersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                friends: [...state.friends, {id: action.userId}],
            }
        
        case UNFOLLOW: 
            let current: number = 0;
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

type FollowActionType = {
    type: typeof FOLLOW,
    userId: number,
}
type UnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number,
}
type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>,
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    pageNumber: number,
}
type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number,
}
type SetFriendActionType = {
    type: typeof SET_FRIEND,
    friend: FriendType,
}

export const follow = (id: number): FollowActionType => ({ type: FOLLOW, userId: id, });
export const unfollow = (id: number): UnfollowActionType => ({ type: UNFOLLOW, userId: id, });
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users: users, });
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber, });
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount, });
export const setFriend = (friend: FriendType): SetFriendActionType => ({ type: SET_FRIEND, friend: friend, });

export const getUsers = (pageSize: number, currentPage: number, token: string) => {
    return async (dispatch: any) => {
        let data = await UsersApi.getUsers(pageSize, currentPage, token);
            dispatch(setUsers(data.usersSend));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setFriend(data.currentUser.friends));
    }
}

export const followTC = (token: string, id: number) => {
    return async (dispatch: any) => {
        let result = await UsersApi.followUser(token, id);
            if (result === 'ok'){
                dispatch(follow(id));
            }
    }
}

export const unfollowTC = (token: string, id: number) => {
    return async (dispatch: any) => {
        let result = await UsersApi.unfollowUser(token, id);
            if (result === 'ok'){
                dispatch(unfollow(id));
            } 
    }
}

export default UsersReducer;