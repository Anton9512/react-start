import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';
import { Redirect } from 'react-router';

class Profile extends React.Component{
   constructor(props){
      super(props)
   }
   render(){
      return (
         <div>
            <ProfileInfo profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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

