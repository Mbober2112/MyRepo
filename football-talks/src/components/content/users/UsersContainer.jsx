import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setFriend } from "../../../redux/usersReducer";
import Users from "./Users";
import * as axios from 'axios';
import React from "react";
import { UsersApi } from "../../../api/api";


class UsersContainer extends React.Component {
    
    componentDidMount () {   
        UsersApi.getUsers(this.props.pageSize, this.props.currentPage, this.props.token).then(data => {
            this.props.setUsers(data.usersSend);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setFriend(data.currentUser.friends);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        UsersApi.getUsers2(this.props.pageSize, pageNumber, this.props.token).then(data => {
            this.props.setUsers(data.usersSend);
        });
    }

    render() {
        return <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            allUsers = {this.props.allUsers}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
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

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFriend}) (UsersContainer);
