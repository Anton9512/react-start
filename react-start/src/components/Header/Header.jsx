import './Header.css';
import React from 'react';

class Header extends React.Component{
   constructor(props) {
      super(props)
   };
   render(){
      return <header className="header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
      </header>
   }
};

// const Header = () => {
//    return ( 
//    <header className="header">
//    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
//    </header>
//    );
// }
export default Header;