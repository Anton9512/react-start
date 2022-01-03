import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.post}>
            <div className={s.item}>{props.message}<img
                src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg"
                alt=""/></div>
            <span>Like</span> {props.likeCount}
        </div>
    )
};

export default Post;


