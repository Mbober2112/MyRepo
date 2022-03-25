import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { ProfileType, setProfile, setStatus } from '../../../redux/profileReducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { MyPostType, postAddedChange} from '../../../redux/addPostReducer';
import { AppStateType } from '../../../redux/reduxStore';
import { myPostsDataSelector, profileSelector } from '../../../redux/selectors/ProfileSelectors';

type MapStatePropsType = {
    myPostsData: Array<MyPostType>,
    profile: ProfileType | null,
}

type MapDispatchPropsType = {
    setProfile: (userId: string, token: string) => void,
    postAddedChange: () => void,
    setStatus: (token: string, status: string) => void,
}

type MyOwnPropsType = {
    token: string,
}

type PathParamsType = {
    userId: string
}

type PropsType = MapStatePropsType & MapDispatchPropsType & MyOwnPropsType;

class ProfileContainer extends React.Component<PropsType & RouteComponentProps<PathParamsType>>{

    componentDidMount () {  
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = 'none';
        }
        this.props.setProfile(userId, this.props.token);
    }

    render () {
        return(
            <Profile myPostsData={this.props.myPostsData} 
            profile={this.props.profile} 
            setStatus={this.props.setStatus} 
            token={this.props.token}
            postAddedChange={this.props.postAddedChange}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        myPostsData: myPostsDataSelector(state),
        profile: profileSelector(state),
    }
}

export default compose<React.ComponentType> (
    connect<MapStatePropsType, MapDispatchPropsType, MyOwnPropsType, AppStateType>(mapStateToProps, {setProfile, setStatus, postAddedChange}),
    withRouter,
    withAuthRedirect,) (ProfileContainer);
