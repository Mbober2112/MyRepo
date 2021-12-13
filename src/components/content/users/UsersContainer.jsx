import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";
import Users from "./Users";


const mapStateToProps = (state) => {
    return {
        allUsers: state.allUsersPage.allUsers,
        pageSize: state.allUsersPage.pageSize,
        totalUsersCount: state.allUsersPage.totalUsersCount,
        currentPage: state.allUsersPage.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            let action = followAC(id);
            dispatch(action);
        },

        unfollow: (id) => {
            let action = unfollowAC(id);
            dispatch(action); 
        },

        setUsers: (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        },

        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageAC(pageNumber);
            dispatch(action);
        },

        setTotalUsersCount: (totalCount) => {
            let action = setTotalUsersCountAC(totalCount);
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;