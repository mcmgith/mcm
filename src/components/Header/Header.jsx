import React from 'react';
import s from'./Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        < img src='https://cdn2.iconfinder.com/data/icons/apple-tv-1/512/apple_logo-128.png' />

        <div className={s.loginBlock} activeClassName={s.active}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <div><NavLink to="/Login" activeClassName={s.active}>Login</NavLink></div>}
        </div>

    </header>
}

export default Header;