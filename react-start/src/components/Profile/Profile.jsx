import MyPosts from './MyPosts/MyPosts';
import './Profile.css'

const Profile = () => {
   return (
      <div className="content">
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
      </div>
      <div className="content__usersdata usersdata">
        <div className="usersdata-img">
          <img src="https://www.meme-arsenal.com/memes/22a3c0a7f871b62553164d795da369d9.jpg"></img>
        </div>
        <div className="usersdata-dates">
          <div className="usersdata-dates_title">Anton P.</div>
          <div className="usersdata-dates_dates">
            <span>Date of Birth: 21 июня</span>
            <span>City: Санкт-Петербург</span>
            <span>Education: ВУиТ</span>
            <span>Web Sute: нет</span>
          </div>
        </div>
      </div>
      <MyPosts/>
    </div>
   )
}

export default Profile;