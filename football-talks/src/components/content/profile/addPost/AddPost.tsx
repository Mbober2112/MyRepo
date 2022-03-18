import React from 'react';
import c from './AddPost.module.css';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
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

const AddPostReduxForm = reduxForm<FormDataType>({ form: 'addPost' })(AddPostForm);

type AddPostPropsType = {
    addPost: (title: string, text: string) => void,
    addPostToServer: (token: string, title: string, text: string) => void,
    token: string,
}
type FormDataType = {
    title: string,
    text: string,
}
const AddPost: React.FC<AddPostPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.title, formData.text);
        props.addPostToServer(props.token, formData.title, formData.text);
    }

    return (
        <AddPostReduxForm onSubmit={onSubmit} />
    )
}

export default AddPost;