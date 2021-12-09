const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    allUsers: [
        { id: 1, name: "Pavel", followed: true, club: 'Спартак Москва', postsCounter: 0, raiting: 0, },
        { id: 2, name: "Petr", followed: false, club: 'ЦСКА Москва', postsCounter: 0, raiting: 0, },
        { id: 3, name: "Dima", followed: true, club: 'Локомотив Москва', postsCounter: 0, raiting: 0, },
        { id: 4, name: "Anton", followed: false, club: 'Динамо Москва', postsCounter: 0, raiting: 0, },
    ],   
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: 
            return {
                ...state,
                allUsers: state.allUsers.map(u =>{
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        
        case UNFOLLOW: 
            return {
                ...state,
                allUsers: state.allUsers.map(u =>{
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW, userId: id, });
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id, });

export default UsersReducer;