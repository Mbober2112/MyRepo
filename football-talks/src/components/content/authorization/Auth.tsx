import c from './Auth.module.css';
import React from 'react';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';

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
    login: string,
    pass: string,
    changeAuthData: (login: string, pass: string) => void,
}

const Auth: React.FC<AuthPropsType> = (props) => {

    const onSubmit = (formData: FormDataType) => {
        props.changeAuthData(formData.login, formData.pass);
    }

    return (
        <div className={c.Auth}>
            <AuthReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Auth;