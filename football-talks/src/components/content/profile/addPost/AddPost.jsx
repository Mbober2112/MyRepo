import React from 'react';
import c from './AddPost.module.css';
import { reduxForm, Field } from 'redux-form';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={c.AddPost}>
            <div className={c.Title}>
                <p>Заголовок:</p>
                <Field component={'input'} name={'title'}/>
            </div>
            <div className={c.Text}>
                <p>Текст поста:</p>
                <Field component={'textarea'} name={'text'}/>
            </div>
            <button>Добавить пост</button>
        </form>
    )
}

const AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm);

const AddPost = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.title, formData.text);
        props.addPostToServer(props.token,formData.title, formData.text);
    }

    return (
        <AddPostReduxForm onSubmit={onSubmit} />
    )
}

export default AddPost;