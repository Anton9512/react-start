import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

function Profile(props) {
    return (
        <div>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;


