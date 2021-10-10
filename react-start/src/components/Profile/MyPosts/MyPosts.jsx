import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
   return (
      <div>
      My post
      <div>
        <div>
          <textarea name="Enter text" id="" cols="30" rows="10"></textarea>
          <button>Add post</button>
          <button>Remove</button>
        </div>
        New post
      </div>
      <div className="posts">
      <Post/>
      <Post/>
      <Post/>
      </div>
    </div>
  )
};

export default MyPosts;