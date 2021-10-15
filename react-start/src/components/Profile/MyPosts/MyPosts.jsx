import s from'./MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postData = [
    {id: 0, message: 'This is react.js', likesCount: 12},
    {id: 1, message: 'Hello, how are you?', likesCount: 5},
    {id: 2, message: 'Welcome', likesCount: 14},
 ]

 let postsEmelemts = postData
 .map((p) => {
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