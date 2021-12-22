import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setProfile } from '../../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

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
            <Profile myPostsData={this.props.myPostsData} profile={this.props.profile}/>
        )
    }
}

let authRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
    return {
        myPostsData: state.addPostState.profilePage.myPostsData,
        profile: state.profilePageData.profile,
    }
}

let UrlDataProfileContainer = withRouter(authRedirectComponent);

export default connect(mapStateToProps, {setProfile}) (UrlDataProfileContainer);