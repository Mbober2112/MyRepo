import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow, setFriend } from "../../../redux/usersReducer";
import Users from "./Users";
import * as axios from 'axios';
import React from "react";


class UsersContainer extends React.Component {
    
    componentDidMount () {    
        axios.get(`http://localhost:8080/user?id=1&count=${this.props.pageSize}&page=${this.props.currentPage}`, 
        {headers:{token: this.props.token}}).then(response => {
            this.props.setUsers(response.data.usersSend);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setFriend(response.data.currentUser.friends);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8080/user?id=1&count=${this.props.pageSize}&page=${pageNumber}`, 
        {headers:{token: this.props.token}}).then(response => {
            this.props.setUsers(response.data.usersSend);
        })
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
