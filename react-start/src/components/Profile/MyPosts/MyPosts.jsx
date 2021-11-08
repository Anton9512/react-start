import s from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

class MyPosts extends React.Component {
  constructor() {
    super()
  };
  render() {
    let postsElements = this.props.postData.map((p) => {
      return <Post message={p.message} likeCount={p.likesCount}/>
          })
      
        let newPostElement = React.createRef();
      
        let onAddPost = () => {
          this.props.addPost()
        }
      
        let onPostChange = () => {
          let text = newPostElement.current.value;
          this.props.updateNewPostText(text);
        };
      
          return (
            <div>
              <div className={s.mypost}>
                <div className={s.mypost__btns}>
                  <div className={s.mypost__logo}>My post</div>
                  <textarea onChange={onPostChange} ref={newPostElement} value={this.props.newPostText} cols="38" rows="6"></textarea>
                  <div><button onClick={ onAddPost }>Add post</button></div>
                </div>
                <div className={s.posts}>
                  {postsElements}
                </div>
            </div>
            </div>
          )
      }
};

export default MyPosts;






// const MyPosts = (props) => {
//  let postsElements = props.postData.map((p) => {
//    return <Post message={p.message} likeCount={p.likesCount}/>
//  })

//  let newPostElement = React.createRef();

//  let onAddPost = () => {
//     props.addPost()
//  }

//  let onPostChange = () => {
//    let text = newPostElement.current.value;
//    props.updateNewPostText(text);
//  };

//    return (
//       <div>
//         <div className={s.mypost}>
//           <div className={s.mypost__btns}>
//             <div className={s.mypost__logo}>My post</div>
//             <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} cols="38" rows="6"></textarea>
//             <div><button onClick={ onAddPost }>Add post</button></div>
//           </div>
//           <div className={s.posts}>
//             {postsElements}
//           </div>
//       </div>
//       </div>
//   )
// };

