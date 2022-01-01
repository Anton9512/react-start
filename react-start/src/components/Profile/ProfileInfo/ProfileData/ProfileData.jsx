import s from './ProfileData.module.css'
import React from "react";

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.profileData}>
        <div className={s.profileDataItem}><span>Full name</span>: {profile.fullName}</div>
        <div className={s.profileDataItem}><span>Looking for a job</span>: {profile.lookingForAJob ? 'yes' : 'no'}</div>
        {profile.lookingForAJob &&
        <div className={s.profileDataItem}><span>My professional skills</span>: {profile.lookingForAJobDescription}</div>
        }
        <div className={s.profileDataItem}><span>About me </span>: {profile.aboutMe}</div>
        <div className={s.profileDataItem}><span>Contacts </span>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}</div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><span>{contactTitle}</span>: {contactValue}</div>

}

export default ProfileData;