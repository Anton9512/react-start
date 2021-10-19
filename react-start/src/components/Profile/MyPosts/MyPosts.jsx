import s from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
  
 let postsElements = props.postData.map((p) => {
   return <Post message={p.message} likeCount={p.likesCount}/>
 })

 let newPostElement = React.createRef();

 let addPost = () => {
   let text = newPostElement.current.value;
   alert(text)
 }

   return (
      <div>
        <div className={s.mypost}>
          <div className={s.mypost__btns}>
            <div className={s.mypost__logo}>My post</div>
            <textarea ref={newPostElement} cols="30" rows="10"></textarea>
            <div><button onClick={ addPost }>Add post</button></div>
          </div>
          <div className={s.posts}>
            {postsElements}
          </div>
      </div>
      </div>
  )
};

export default MyPosts;