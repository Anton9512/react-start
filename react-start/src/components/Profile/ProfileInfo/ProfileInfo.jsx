import React from 'react';
import s from'./ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userPhoto from '../../../images/user.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

class ProfileInfo extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    if (!this.props.profile ) {
      return <Preloader/>
    };
    return (
        <div>
          {/* <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
          </div> */}
          <img className={s.userPhoto} src={this.props.profile.photos.large || userPhoto} alt="" />
          <ProfileStatusWithHooks status={this.props.status} updateStatus={this.props.updateStatus}/>
        </div>
      )
  }
};


export default ProfileInfo;




// const ProfileInfo = () => {
//    return (
//       <div>
//       <div>
//         <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
//       </div>
//       <div className={s.userdata}>
//         <div className={s.imageblock}>
//           <img className={s.image} src="https://www.meme-arsenal.com/memes/22a3c0a7f871b62553164d795da369d9.jpg"></img>
//         </div>
//         <div className={s.userinfo}>
//           <div className={s.userinfo__title}>Anton P.</div>
//           <div className={s.userinfo__info}>
//             <span>Date of Birth: 21 июня</span>
//             <span>City: Санкт-Петербург</span>
//             <span>Education: ВУиТ</span>
//             <span>Web Site: нет</span>
//           </div>
//         </div>
//       </div>
//     </div>
//    )
// }

