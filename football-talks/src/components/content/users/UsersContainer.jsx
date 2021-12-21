import { connect } from "react-redux";
import { followTC, setCurrentPage, unfollowTC, getUsers } from "../../../redux/usersReducer";
import Users from "./Users";
import React from "react";

class UsersContainer extends React.Component {
    
    componentDidMount () {   
        this.props.getUsers(this.props.pageSize, this.props.currentPage, this.props.token);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.pageSize, pageNumber, this.props.token);
    }

    render() {
        return <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            allUsers = {this.props.allUsers}
            unfollowTC = {this.props.unfollowTC}
            followTC = {this.props.followTC}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}
            friends = {this.props.friends}
            token = {this.props.token}/>
    };
}

const mapStateToProps = (state) => {
    return {
        allUsers: state.allUsersPage.allUsers,
        pageSize: state.allUsersPage.pageSize,
        totalUsersCount: state.allUsersPage.totalUsersCount,
        currentPage: state.allUsersPage.currentPage,
        token: state.auth.token,
        friends: state.allUsersPage.friends,
    }
}

export default connect(mapStateToProps, {followTC, unfollowTC, setCurrentPage, getUsers}) (UsersContainer);
