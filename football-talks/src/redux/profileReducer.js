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

export default ProfileReducer;