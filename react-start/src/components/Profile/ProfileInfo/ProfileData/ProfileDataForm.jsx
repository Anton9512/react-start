import React from "react";
import s from '../ProfileInfo.module.css';
import styles from './ProfileDataForm.module.css'
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import style from "../../../common/FormsControls/FormsControls.module.css";


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form className={styles.profileDataForm} onSubmit={handleSubmit}>
        {error && <div className={style.formSummuryError}>
            {error}
        </div>}
        <div className={styles.profileDataForItem}>
            <div><span>Full name</span>:<Field placeholder={'Full name'} name={'fullName'} component={Input}/></div>
            <div><span>Looking for a job</span>:<Field name={'lookingForAJob'} component={Input} type={'checkbox'}/></div>
            <div><span>My professional skills</span>:<Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Textarea}/></div>
            <div><span>About me </span>:<Field name={'aboutMe'} component={Textarea}/></div>
            <div><button>save</button></div>
        </div>
        <div className={styles.profileDataFormContacts}>
            <div className={styles.profileDataForItem}><span>Contacts </span>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}:<Field placeholder={key} name={'contacts.' + key } component={Input}/></b>
                </div>
            })}</div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;

