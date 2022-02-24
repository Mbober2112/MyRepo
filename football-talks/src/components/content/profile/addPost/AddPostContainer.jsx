import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withProfileRedirect } from '../../../../hoc/withProfileRedirect';
import { addPost,} from '../../../../redux/addPostReducer';
import AddPost from './AddPost';
import { addPostToServer } from '../../../../redux/profileReducer';

const mapStateToProps = (state) => {
    return {
        newPostTitle: state.addPostState.profilePage.newPostTitle,
        newPostText: state.addPostState.profilePage.newPostText,
        token: state.auth.token,
    }
}

export default compose (
    connect(mapStateToProps, {addPost, addPostToServer}),
    withProfileRedirect,) (AddPost);

// const AddPostContainer = connect(mapStateToProps, {addPost, changeNewPost}) (AddPost);

// export default AddPostContainer;