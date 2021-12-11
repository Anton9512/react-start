import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile ) {
        return <Preloader/>
    }
    return (
        <div>
          <img className={s.userPhoto} src={profile.photos.large || userPhoto} alt="" />
          <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
      )
};


export default ProfileInfo;

