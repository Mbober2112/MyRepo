const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    allUsers: [
        // { id: 1, name: "Pavel", followed: true, club: 'Спартак Москва', postsCounter: 0, raiting: 0, },
        // { id: 2, name: "Petr", followed: false, club: 'ЦСКА Москва', postsCounter: 0, raiting: 0, },
        // { id: 3, name: "Dima", followed: true, club: 'Локомотив Москва', postsCounter: 0, raiting: 0, },
        // { id: 4, name: "Anton", followed: false, club: 'Динамо Москва', postsCounter: 0, raiting: 0, },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,   
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
        case SET_USERS: 
            return {...state, allUsers: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};    
        
        default:
            return state;
    }
}

export const followAC = (id) => ({ type: FOLLOW, userId: id, });
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id, });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users, });
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber, });
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount, });

export default UsersReducer;