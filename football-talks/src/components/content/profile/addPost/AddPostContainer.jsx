import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withProfileRedirect } from '../../../../hoc/withProfileRedirect';
import { addPost,} from '../../../../redux/addPostReducer';
import AddPost from './AddPost';

const mapStateToProps = (state) => {
    return {
        newPostTitle: state.addPostState.profilePage.newPostTitle,
        newPostText: state.addPostState.profilePage.newPostText,
    }
}

export default compose (
    connect(mapStateToProps, {addPost,}),
    withProfileRedirect,) (AddPost);

// const AddPostContainer = connect(mapStateToProps, {addPost, changeNewPost}) (AddPost);

// export default AddPostContainer;