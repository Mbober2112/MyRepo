import React from 'react';
import { connect } from 'react-redux';
import { addPost, changeNewPost } from '../../../../redux/addPostReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        newPostTitle: state.addPostState.profilePage.newPostTitle,
        newPostText: state.addPostState.profilePage.newPostText,
    }
}

const AddPostContainer = connect(mapStateToProps, {addPost, changeNewPost}) (AddPost);

export default AddPostContainer;