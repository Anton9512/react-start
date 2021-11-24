import Profile from './Profile';
import React from 'react';
import { connect } from 'react-redux'
import { getUserProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import { withRouter } from 'react-router';
import { compose } from 'redux';

class ProfileContainer extends React.Component{
   componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = 20748;
      }
      this.props.getUserProfile(userId);
      //setTimeout(() => {
         this.props.getStatus(userId)
     // }, 1000);
   };

   render(){
      return (
         <div>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            {/* status придет к нам через пропсы */}
         </div>
      )
   };
};

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status, // потому что мы запросили status здесь
});
debugger;
export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
   withRouter,
  // withAuthRedirect
) (ProfileContainer);


// const Profile = (props) => {
//    return (
//       <div>
//         <ProfileInfo/>
//         <MyPostsContainer/>
//     </div>
//    )
// }

