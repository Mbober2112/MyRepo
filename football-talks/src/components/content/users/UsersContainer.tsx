import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/reduxStore";
import { followTC, FriendType, getUsers, setCurrentPage, unfollowTC, UserType } from "../../../redux/usersReducer";
import Users from "./Users";
import {allUsersSelector, currentPageSelector, friendsSelector, pageSizeSelector, tokenSelector, TotalUsersCountSelector} from '../../../redux/selectors/UsersSelectors'

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
        allUsers: allUsersSelector(state),
        pageSize: pageSizeSelector(state),
        totalUsersCount: TotalUsersCountSelector(state),
        currentPage: currentPageSelector(state),
        token: tokenSelector(state),
        friends: friendsSelector(state),
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {followTC, unfollowTC, setCurrentPage, getUsers}) (UsersContainer);
