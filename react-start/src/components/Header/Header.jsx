import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
   constructor(props) {
      super(props)
   }
   render(){
      return <header className={s.header}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
      <div className={s.loginBlock}>
         {this.props.isAuth ? this.props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
      </header>
   }
};

// const Header = (props) => {
//    return ( 
//       <header className="header">
//          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
//          <div className={s.loginBlock}>
//             {this.props.isAuth ? this.props.login : <NavLink to={'/login'}>Login</NavLink>}
//          </div>
//       </header>
//    );
// }
export default Header;