import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';

const Navbar = () => {
    return(
        <div className={c.Navbar}>
            <div className={c.Item}>
                <NavLink to="/profile" activeClassName={c.Active}>-Профиль</NavLink>
            </div>
            <div className={c.Item}>
                <NavLink to="/allposts" activeClassName={c.Active}>-Все посты</NavLink>
            </div>
            <div className={c.Item}>
                <NavLink to="/dialogs" activeClassName={c.Active}>-Диалоги</NavLink>
            </div>
            <div className={c.Item}>
                <NavLink to="/saved" activeClassName={c.Active}>-Сохраненное</NavLink>
            </div>
            <div className={c.Item}>
                <NavLink to="/friends" activeClassName={c.Active}>-Друзья</NavLink>
            </div>
            <div className={c.Item}>
                <NavLink to="/settings" activeClassName={c.Active}>-Настройки</NavLink>
            </div>
        </div>
    );
}

export default Navbar;