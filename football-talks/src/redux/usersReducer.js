const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_FRIEND = 'SET-FRIEND';

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

export default UsersReducer;