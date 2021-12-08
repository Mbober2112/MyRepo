import React from 'react';
import { addPostActionCreator, changeNewPostActionCreator } from '../../../../redux/addPostReducer';
import AddPost from './AddPost';

const AddPostContainer = (props) => {

    let state = props.store.getState(); 

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let newPostChange = (title, text) => {
        let action = changeNewPostActionCreator(title, text);
        props.store.dispatch(action);
    }

    return(
        <AddPost addPost={addPost} 
        newPostChange={newPostChange} 
        newPostTitle={state.addPostState.profilePage.newPostTitle} 
        newPostText={state.addPostState.profilePage.newPostText}/>
    )
}

export default AddPostContainer;