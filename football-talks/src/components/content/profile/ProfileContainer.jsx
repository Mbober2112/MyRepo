import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../../redux/profileReducer';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount () {  
        let userId = this.props.match.params.userId; 
        if (!userId) {
            userId = 'none';
        }
        axios.get(`http://localhost:8080/user/userpage?id=${userId}`, {headers:{token: this.props.token}}).then(response => {
            
            debugger;
            
            this.props.setUserProfile(response.data);
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