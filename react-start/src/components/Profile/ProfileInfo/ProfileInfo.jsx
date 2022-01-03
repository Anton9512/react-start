import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileData/ProfileDataForm";
import ProfileData from "./ProfileData/ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <div className={s.profile}>
            <div className={s.profileImageBlock}>
                <img className={s.userPhoto} src={profile.photos.large || userPhoto} alt=""/>
                <div>{isOwner &&
                <label>
                    <input className={s.changePhoto} type={'file'} onChange={onMainPhotoSelected}/>
                    download image
                </label>}</div>
            </div>
            <div className={s.profileDataBlock}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={profile} isOwner={isOwner}/>}
            </div>
        </div>
    )
};

export default ProfileInfo;

