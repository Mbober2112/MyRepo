import c from './Auth.module.css';
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AuthForm = (props) => {
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

const AuthReduxForm = reduxForm({ form: 'auth' })(AuthForm);

const Auth = (props) => {

    const onSubmit = (formData) => {
        props.changeAuthData(formData.login, formData.pass);
    }

    return (
        <div className={c.Auth}>
            <AuthReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Auth;