import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
   return ( 
      <header className={s.header}>
         <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
         <div className={s.loginBlock}>
            {props.isAuth 
            ? <div><button onClick={props.logout}>Log out</button></div>
            : <NavLink to={'/login'}>LOGIN</NavLink>}
         </div>
      </header>
   );
}
export default Header;

