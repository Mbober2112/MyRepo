import { AddPostApi, ProfileApi } from "../api/api";

const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_USER_PROFILE_STATUS = 'profile/SET-USER-PROFILE-STATUS';
const ADD_POST_TO_PROFILE_PAGE = 'profile/ADD-POST-TO-PROFILE-PAGE';
let initialState = {
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {
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
                profile: { ...state.profile, posts: [newPost, ...state.profile.posts] }
            };

        case SET_USER_PROFILE_STATUS:
            return {
                ...state,
                profile: { ...state.profile, status: action.status }
            };

        default:
            return state;
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setUserProfileStatus = (status) => ({ type: SET_USER_PROFILE_STATUS, status: status });
export const addPostToProfilePage = (title, text) => ({ type: ADD_POST_TO_PROFILE_PAGE, title: title, text: text });

export const setProfile = (userId, token) => {
    return async (dispatch) => {
        let data = await ProfileApi.getProfile(userId, token);
        dispatch(setUserProfile(data));
    }
}

export const setStatus = (token, status) => {
    return async (dispatch) => {
        let data = await ProfileApi.changeStatus(token, status);
        dispatch(setUserProfileStatus(data));
    }
}

export const addPostToServer = (token, title, text) => {
    return async (dispatch) => {
        let result = await AddPostApi.addPostToServer(token, title, text);
        if (result === 'ok') {
            dispatch(addPostToProfilePage(title, text));
        }
    }
}

export default ProfileReducer;