import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from'./Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';

class Profile extends React.Component{
   constructor(props) {
      super(props)
   };
   render(){
      return (
         <div>
            <ProfileInfo/>
            <MyPostsContainer/>
         </div>
      )
   };
};

export default Profile;


// const Profile = (props) => {
//    return (
//       <div>
//         <ProfileInfo/>
//         <MyPostsContainer/>
//     </div>
//    )
// }

