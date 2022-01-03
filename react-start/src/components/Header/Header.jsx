import s from './Header.module.css';
import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from './../../images/icons/bd8c2af2b589d69678e8603a86da03fb.svg'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logoBlock}>
                <img src={logo}></img>
                <span>Social Network</span>
            </div>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <button onClick={props.logout}>Log out</button>
                    </div>
                    : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
}


export default Header;

