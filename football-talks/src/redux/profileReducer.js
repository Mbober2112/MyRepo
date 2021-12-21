import { ProfileApi } from "../api/api";

const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    profile: null,
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:    
            return {
                ...state, profile: action.profile,
                }
            
            default:
                return state;
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });

export const setProfile = (userId, token) => {
    return (dispatch) => {
        ProfileApi.getProfile(userId, token).then(data => { 
            dispatch(setUserProfile(data));
        });
    }
}

export default ProfileReducer;