import Profile from './Profile';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        myPostsData: state.addPostState.profilePage.myPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps) (Profile);

export default ProfileContainer;