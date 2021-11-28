import React from "react";
import { Field } from 'redux-form';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from './Login.module.css';

const LoginForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} action="">
         <div><Field validate={[required]} placeholder={'Login'} name={'login'} type="text" component={Input}/></div>
         <div><Field validate={[required]} placeholder={'Password'} name={'password'}  type="password" component={Input}/></div>
         <div><Field type={'checkbox'} name={'rememberMe'}  component={Input}/> remember me</div>
         <div><button>Login</button></div>
      </form>
   )
};



export default LoginForm; 