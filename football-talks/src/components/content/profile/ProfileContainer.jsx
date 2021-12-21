import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setProfile } from '../../../redux/profileReducer';
import { Redirect, withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount () {  
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = 'none';
        }
        this.props.setProfile(userId, this.props.token);
    }

    render () {
        if (this.props.token === '') return <Redirect to='/auth' />
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

export default connect(mapStateToProps, {setProfile}) (UrlDataProfileContainer);