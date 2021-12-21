import React from "react";
import { Field } from 'redux-form';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from './Login.module.css';
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   return (
      <form onSubmit={handleSubmit}>
         <div><Field validate={[required]} placeholder={'Email'} name={'email'} type="text" component={Input}/></div>
         <div><Field validate={[required]} placeholder={'Password'} name={'password'}  type="password" component={Input}/></div>
         <div><Field type={'checkbox'} name={'rememberMe'}  component={Input}/> remember me</div>
          { captchaUrl && <img src={captchaUrl} alt=""/>}
          { captchaUrl && <Field placeholder={'symbols from image'} name={'captcha'} validate={[required]}  component={Input}/>}

         {error && <div className={style.formSummuryError}>
            {error}
         </div>}
         <div><button>Login</button></div>
      </form>
   )
};



export default LoginForm; 