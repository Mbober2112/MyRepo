import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setProfile, setStatus } from '../../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component{

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
            token={this.props.token}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myPostsData: state.addPostState.profilePage.myPostsData,
        profile: state.profilePageData.profile,
    }
}

export default compose (
    connect(mapStateToProps, {setProfile, setStatus}),
    withRouter,
    withAuthRedirect,) (ProfileContainer);
