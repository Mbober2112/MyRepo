import { ProfileApi } from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_PROFILE_STATUS = 'SET-USER-PROFILE-STATUS';

let initialState = {
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile,
            };
            
        case SET_USER_PROFILE_STATUS:
            return {
                ...state,
                profile: {...state.profile, status: action.status}
            };

        default:
            return state;
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const setUserProfileStatus = (status) => ({ type: SET_USER_PROFILE_STATUS, status: status });

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

export default ProfileReducer;