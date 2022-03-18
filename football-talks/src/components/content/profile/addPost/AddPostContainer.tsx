import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withProfileRedirect } from '../../../../hoc/withProfileRedirect';
import { addPost,} from '../../../../redux/addPostReducer';
import AddPost from './AddPost';
import { addPostToServer } from '../../../../redux/profileReducer';
import { AppStateType } from '../../../../redux/reduxStore';

type MapStatePropsType = {
    newPostTitle: string,
    newPostText: string,
    token: string,
}
type MapDispatchPropsType = {
    addPost: (title: string, text: string) => void,
    addPostToServer: (token: string, title: string, text: string) => void,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        newPostTitle: state.addPostState.profilePage.newPostTitle,
        newPostText: state.addPostState.profilePage.newPostText,
        token: state.auth.token,
    }
}

export default compose<React.ComponentType> (
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {addPost, addPostToServer}),
    withProfileRedirect,) (AddPost);
