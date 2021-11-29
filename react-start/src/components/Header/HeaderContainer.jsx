import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout  } from '../../redux/auth-reducer';

class HeaderContainer extends React.Component {
   componentDidMount() {
      this.props.getAuthUserData()
   };
   render(){
      return <Header/>
   }
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export default connect (mapStateToProps, {getAuthUserData, logout})(Header);



// const Header = () => {
//    return ( 
   //    <header className="header">
   //       <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
   //    </header>
//    );
// }
