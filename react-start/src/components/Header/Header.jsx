import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../images/icons/send_96686.svg'

const Header = (props) => {
   return ( 
      <header className={s.header}>
         <img src={logo}></img>
         <div className={s.loginBlock}>
            {props.isAuth 
            ? <div><button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>LOGIN</NavLink>}
         </div>
      </header>
   );
}


export default Header;

