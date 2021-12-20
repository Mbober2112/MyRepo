import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../../redux/profileReducer';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { ProfileApi } from '../../../api/api';

class ProfileContainer extends React.Component{

    componentDidMount () {  
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = 'none';
        }
        ProfileApi.getProfile(userId, this.props.token).then(data => { 
            this.props.setUserProfile(data);
        })
    }

    render () {
        return(
            <Profile myPostsData={this.props.myPostsData} profile={this.props.profile}/>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        myPostsData: state.addPostState.profilePage.myPostsData,
        profile: state.profilePageData.profile,
        token: state.auth.token,
    }
}

let UrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (UrlDataProfileContainer);