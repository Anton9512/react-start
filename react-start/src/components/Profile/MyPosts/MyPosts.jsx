import s from'./MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

class MyPosts extends React.Component {
  render() {
    let postsElements = this.props.postData.map((p) => {
      return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
          })
      
        let newPostElement = React.createRef();
      
        let onAddPost = (values) => {
          this.props.addPost(values.newPostText);
        }
          return (
            <div>
              <div className={s.mypost}>
                <div className={s.mypost__btns}>
                  <div className={s.mypost__logo}>My post</div>
                 <AddNewPostFormRedux onSubmit={ onAddPost }/>
                </div>
                <div className={s.posts}>
                  {postsElements}
                </div>
            </div>
            </div>
          )
      }
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'} placeholder={'Post message'}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

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

