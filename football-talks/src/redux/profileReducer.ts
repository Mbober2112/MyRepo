import { ThunkAction } from "redux-thunk";
import { AddPostApi, ProfileApi } from "../api/api";
import { AppStateType } from "./reduxStore";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_PROFILE_STATUS = 'profile/SET-USER-PROFILE-STATUS';
const ADD_POST_TO_PROFILE_PAGE = 'profile/ADD-POST-TO-PROFILE-PAGE';
export const SET_PROFILE = 'profile/SET-PROFILE';
export const SET_STATUS = 'profile/SET-STATUS';
export const ADD_POST = 'profile/ADD-POST';

export type PostType = {
    title: string,
    text: string,
    likes: number,
    dislikes: number,
}
type FriendType = {
    id: number,
}
export type ProfileType = {
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
let initialState = {
    profile: null as null | ProfileType,
}

export type InitialStateType = typeof initialState;

const ProfileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,
            };

        case ADD_POST_TO_PROFILE_PAGE:
            let newPost =
            {
                title: action.title,
                text: action.text,
                likes: 0,
                dislikes: 0
            }
            return {
                ...state,
                profile: { ...state.profile, posts: [newPost, ...state.profile!.posts as Array<PostType>]} as ProfileType,
            };

        case SET_USER_PROFILE_STATUS:
            return {
                ...state,
                profile: { ...state.profile, status: action.status } as ProfileType,
            };

        default:
            return state;
    }
}
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType,
}
type SetUserProfileStatusActionType = {
    type: typeof SET_USER_PROFILE_STATUS,
    status: string,
}
type AddPostToProfilePageActionType = {
    type: typeof ADD_POST_TO_PROFILE_PAGE,
    title: string,
    text: string,
}
type ActionsTypes = SetUserProfileActionType | SetUserProfileStatusActionType | AddPostToProfilePageActionType;

export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile: profile });
export const setUserProfileStatus = (status: string): SetUserProfileStatusActionType => ({ type: SET_USER_PROFILE_STATUS, status: status });
export const addPostToProfilePage = (title: string, text: string): AddPostToProfilePageActionType => ({ type: ADD_POST_TO_PROFILE_PAGE, title: title, text: text });

export const setProfile = (userId: string, token: string) => ({type: SET_PROFILE, userId: userId, token: token});
export const setStatus = (token: string, status: string) => ({type: SET_STATUS, token: token, status: status});
export const addPostToServer = (token: string, title: string, text: string) => ({type: ADD_POST, token: token, title: title, text: text});

export default ProfileReducer;