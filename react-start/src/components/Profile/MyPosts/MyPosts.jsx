import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
        <div className={s.mypost}>
          <div className={s.mypost__btns}>
            <div>My post</div>
            <textarea id="" cols="30" rows="10"></textarea>
            <button>Add post</button>
            <button>Remove</button>
          </div>
          <div className={s.posts}>
        <Post message="This is react.js" likeCount="4"/>
        <Post message="Hello, how are you?" likeCount="0"/>
        <Post message="Welcome" likeCount="16"/>
          </div>
      </div>
      </div>
  )
};

export default MyPosts;