import { connect } from "react-redux";
import { followTC, setCurrentPage, unfollowTC, getUsers, FriendType, UserType } from "../../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import { AppStateType } from "../../../redux/reduxStore";

type MapDispatchPropsType = {        
    unfollowTC: (token: string, id: number) => void,
    followTC: (token: string, id: number) => void,
    getUsers: (pageSize: number, currentPage: number, toket: string) => void,
    setCurrentPage: (pageNumber: number) => void,
}

type MapStatePropsType = {
    allUsers: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    token: string,
    friends: Array<FriendType>,    
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class UsersContainer extends React.Component<PropsType> {
    
    componentDidMount () {   
        this.props.getUsers(this.props.pageSize, this.props.currentPage, this.props.token);
    }

    onPageChanged = (pageNumber: number) => {
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

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        allUsers: state.allUsersPage.allUsers,
        pageSize: state.allUsersPage.pageSize,
        totalUsersCount: state.allUsersPage.totalUsersCount,
        currentPage: state.allUsersPage.currentPage,
        token: state.auth.token,
        friends: state.allUsersPage.friends,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {followTC, unfollowTC, setCurrentPage, getUsers}) (UsersContainer);
