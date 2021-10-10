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
      <Post text='Welcome to React!' message='6'/>
      <Post text='Hello!' message='4'/>
      <Post text='Who are you?' message='13'/>
      </div>
    </div>
  )
};

export default MyPosts;