import s from './MyPosts.module.css';
import Post from './Post/Post';
import React, {useEffect} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/FormsControls/FormsControls';

function MyPosts(props) {

    let postsElements = props.postData.map((p) => {
        return <Post key={p.id} message={p.message} likeCount={p.likesCount}/>
    })

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
        values.newPostText = '';
    }
    return (
        <div>
            <div className={s.mypost}>
                <div className={s.mypost__btns}>
                    <div className={s.mypost__logo}>My post</div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
};

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={'newPostText'} placeholder={'Post message'}/>
      </div>
      <div>
        <button className={s.addPost}>Add post</button>
      </div>
    </form>
  )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;


