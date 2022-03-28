const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const SET_FRIEND = 'users/SET-FRIEND';
export const GET_USERS = 'users/GET-USERS';
export const GET_FOLLOW = 'users/GET-FOLLOW';
export const GET_UNFOLLOW = 'users/GET-UNFOLLOW';

type PostType = {
    title: string,
    text: string,
    likes: number,
    dislikes: number,
}
export type UserType = {
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
export type FriendType = {
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

const UsersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
            return {...state, friends: action.friend!};    
        
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
    friend: Array<FriendType> | undefined,
}

type ActionsTypes = FollowActionType | UnfollowActionType | SetUsersActionType | SetCurrentPageActionType |
    SetTotalUsersCountActionType | SetFriendActionType;

export const follow = (id: number): FollowActionType => ({ type: FOLLOW, userId: id, });
export const unfollow = (id: number): UnfollowActionType => ({ type: UNFOLLOW, userId: id, });
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users: users, });
export const setCurrentPage = (pageNumber: number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber, });
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount, });
export const setFriend = (friend: Array<FriendType> | undefined): SetFriendActionType => ({ type: SET_FRIEND, friend: friend, });

export const getUsers = (pageSize: number, currentPage: number, token: string) => ({type: GET_USERS, pageSize: pageSize, currentPage: currentPage, token: token})
export const followTC = (token: string, id: number) => ({type: GET_FOLLOW, token: token, id: id})
export const unfollowTC = (token: string, id: number) => ({type: GET_UNFOLLOW, token: token, id: id})

export default UsersReducer;