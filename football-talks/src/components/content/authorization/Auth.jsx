import { NavLink } from 'react-router-dom';
import c from './Auth.module.css';
import React from 'react';

const Auth = (props) => {

    let newLogin = React.createRef();
    let newPass = React.createRef();

    let addLogin = () => {
        props.onLogin();
    }

    let onAuthDataChange = () => {
        let login = newLogin.current.value;
        let pass = newPass.current.value;
        props.changeAuthData(login, pass);
    }

    return (
        <div className={c.Auth}>
            <div className={c.Items}>
                <span>Логин: </span>
                <input onChange={onAuthDataChange} ref={newLogin} value={props.login}/>
            </div>
            <div className={c.Items}>
                <span>Пароль: </span>
                <input onChange={onAuthDataChange} ref={newPass} value={props.pass}/>
            </div>
            <div className={c.Button}>
                <NavLink to='/enter'>
                    <button onClick={addLogin}>Войти</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Auth;