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

type MapDispatchPropsType = {
    setProfile: (userId: string, token: string) => void,
    setStatus: (token: string, status: string) => void,
}

type MyOwnPropsType = {
    token: string,
}

type PathParamsType = {
    userId: string
}

type PropsType = MapDispatchPropsType & MyOwnPropsType;

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
            <Profile setStatus={this.props.setStatus}/>
        )
    }
}

export default compose<React.ComponentType> (
    connect<{}, MapDispatchPropsType, MyOwnPropsType, AppStateType>(null, {setProfile, setStatus}),
    withRouter,
    withAuthRedirect,) (ProfileContainer);
