import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
         let {id, login, email}= response.data.data;
         if (response.data.resultCode === 0) {
            this.props.setAuthUserData(id, login, email)
         }
      });
   };
   render(){
      return <Header/>
   }
};

const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth,
   login: state.auth.login,
})

export default connect (mapStateToProps, {setAuthUserData})(HeaderContainer);



// const Header = () => {
//    return ( 
   //    <header className="header">
   //       <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png"></img>
   //    </header>
//    );
// }
