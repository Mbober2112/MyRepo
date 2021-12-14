import Profile from './Profile';
import { connect } from 'react-redux';
import React from 'react';
import { setUserProfile } from '../../../redux/profileReducer';
import * as axios from 'axios';

class ProfileContainer extends React.Component{

    componentDidMount () {   
        axios.get('http://localhost:8080/user/1').then(response => {
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
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);