import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../../redux/usersReducer";
import Users from "./Users";
import * as axios from 'axios';
import React from "react";


class UsersContainer extends React.Component {
    
    componentDidMount () {    
        axios.get(`http://localhost:8080/user?id=1&count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {
            
            this.props.setUsers(response.data.usersSend);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`http://localhost:8080/user?id=1&count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.usersSend);
        })
    }

    render() {
        debugger;
        return <Users 
            totalUsersCount = {this.props.totalUsersCount}
            pageSize = {this.props.pageSize}
            allUsers = {this.props.allUsers}
            unfollow = {this.props.unfollow}
            follow = {this.props.follow}
            currentPage = {this.props.currentPage}
            onPageChanged = {this.onPageChanged}/>
    };
}

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

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);
