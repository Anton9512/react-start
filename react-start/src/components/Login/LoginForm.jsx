import React from "react";
import { Field } from 'redux-form';
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from './Login.module.css';
import style from './../common/FormsControls/FormsControls.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
   return (
      <form className={s.formContent} onSubmit={handleSubmit}>
         <div><Field className={s.email} validate={[required]} placeholder={'Email'} name={'email'} type="text" component={Input}/></div>
         <div><Field className={s.password} validate={[required]} placeholder={'Password'} name={'password'}  type="password" component={Input}/></div>
         <div className={s.checkbox}><Field type={'checkbox'} name={'rememberMe'}  component={Input}/><span>remember me</span></div>
          { captchaUrl && <img src={captchaUrl} alt=""/>}
          { captchaUrl && <Field placeholder={'symbols from image'} name={'captcha'} validate={[required]}  component={Input}/>}

         {error && <div className={style.formSummuryError}>
            {error}
         </div>}
         <div><button className={s.loginBtn}>Login</button></div>
          <div><p>Don't have an account? <a target='_blank' href="https://social-network.samuraijs.com/signUp">Sign up</a></p></div>
      </form>
   )
};



export default LoginForm; 