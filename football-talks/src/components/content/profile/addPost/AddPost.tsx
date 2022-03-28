import React from 'react';
import c from './AddPost.module.css';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { tokenSelector } from '../../../../redux/selectors/GeneralSelectors';
import { addPost } from '../../../../redux/addPostReducer';
import { addPostToServer } from '../../../../redux/profileReducer';
import { compose } from 'redux';
import { withProfileRedirect } from '../../../../hoc/withProfileRedirect';

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
    
}
type FormDataType = {
    title: string,
    text: string,
}
const AddPost: React.FC<AddPostPropsType> = (props) => {

    const token = useSelector(tokenSelector);

    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
        dispatch(addPost(formData.title, formData.text));
        dispatch(addPostToServer(token, formData.title, formData.text));
    }

    return (
        <AddPostReduxForm onSubmit={onSubmit} />
    )
}

export default compose(withProfileRedirect)(AddPost);