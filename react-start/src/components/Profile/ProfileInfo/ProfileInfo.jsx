import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile ) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
          <img className={s.userPhoto} src={profile.photos.large || userPhoto} alt="" />
            <div>{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}</div>
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      )
};


export default ProfileInfo;

