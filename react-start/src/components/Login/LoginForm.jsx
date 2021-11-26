import React from "react";
import { Field } from 'redux-form';
import s from './Login.module.css';

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} action="">
         <div><Field placeholder={'Login'} name={'login'} type="text" component={'input'}/></div>
         <div><Field placeholder={'Password'} name={'password'}  type="password" component={'input'}/></div>
         <div><Field type={'checkbox'} name={'rememberMe'}  component={'input'}/> remember me</div>
         <div><button>Login</button></div>
      </form>
   )
};



export default LoginForm; 