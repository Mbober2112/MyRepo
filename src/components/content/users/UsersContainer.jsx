import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    return {
        allUsers: state.allUsersPage.allUsers,
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);

export default UsersContainer;