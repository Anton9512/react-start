import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

 let postsEmelemts = props.postData.map((p) => {
   return <Post message={p.message} likeCount={p.likesCount}/>
 })

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
            {postsEmelemts}
          </div>
      </div>
      </div>
  )
};

export default MyPosts;