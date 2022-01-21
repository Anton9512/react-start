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
            <div><b>Full name</b>:<Field placeholder={'Full name'} name={'fullName'} component={Input}/></div>
            <div><b>Looking for a job</b>:<Field name={'lookingForAJob'} component={Input} type={'checkbox'}/></div>
            <div><b>My professional skills</b>:<Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Textarea}/></div>
            <div><b>About me </b>:<Field name={'aboutMe'} component={Textarea}/></div>
            <div><button>save</button></div>
        </div>
        <div className={styles.profileDataFormContacts}>
            <div className={styles.profileDataForItem}><b>Contacts </b>: {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <span className={styles.contactKey}>{key}:<Field name={'contacts.' + key } component={Input}/></span>
                </div>
            })}</div>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({
    form: 'edit-profile',
})(ProfileDataForm);

export default ProfileDataFormReduxForm;

