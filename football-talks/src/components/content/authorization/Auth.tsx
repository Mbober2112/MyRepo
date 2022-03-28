import c from './Auth.module.css';
import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, passwordSelector } from '../../../redux/selectors/GeneralSelectors';
import { changeAuthData } from '../../../redux/authReducer';
import { withEnterRedirect } from '../../../hoc/withEnterRedirect';
import { compose } from 'redux';

type FormDataType = {
    login: string,
    pass: string,
}
const AuthForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={c.Items}>
                <span>Логин: </span>
                <Field component={'input'} name={'login'} />
            </div>
            <div className={c.Items}>
                <span>Пароль: </span>
                <Field component={'input'} name={'pass'} type={'password'}/>
            </div>
            <div className={c.Button}>                
                <button>Войти</button>                
            </div>
        </form>
    )
}

const AuthReduxForm = reduxForm<FormDataType>({ form: 'auth' })(AuthForm);

type AuthPropsType = {
    
}

const Auth: React.FC<AuthPropsType> = (props) => {
    const login = useSelector(loginSelector);
    const pass = useSelector(passwordSelector);

    const dispatch = useDispatch();

    const onSubmit = (formData: FormDataType) => {
        dispatch(changeAuthData(formData.login, formData.pass));
    }

    return (
        <div className={c.Auth}>
            <AuthReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default compose(withEnterRedirect)(Auth);