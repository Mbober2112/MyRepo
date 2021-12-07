import React from 'react';
import { addPostActionCreator, changeNewPostActionCreator } from '../../../../redux/addPostReducer';
import c from './AddPost.module.css';

const AddPost = (props) => {

    let newPostText = React.createRef();
    let newPostTitle = React.createRef();

    let addNewPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onNewPostChange = () => {
        let title = newPostTitle.current.value;
        let text = newPostText.current.value;
        let action = changeNewPostActionCreator(title, text);
        props.dispatch(action);
    }

    return(
        <div className={c.AddPost}>
            <div className={c.Title}>
                <p>Заголовок:</p>
                <input onChange={onNewPostChange} ref={newPostTitle} value={props.newPostTitle}></input>
            </div>
            <div className={c.Text}>
                <p>Текст поста:</p>
                <textarea onChange={onNewPostChange} ref={newPostText} value={props.newPostText}></textarea>
            </div>
            <button onClick={addNewPost}>Добавить пост</button>
        </div>
    )
}

export default AddPost;