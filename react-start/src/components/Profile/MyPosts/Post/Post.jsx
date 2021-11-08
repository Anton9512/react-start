import React from 'react';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props)
  };
  render() {
    return (
      <div>
        <div className="item">{this.props.message}<img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="" /></div>
        <span>Like</span> {this.props.likeCount}
      </div>
    )
  }
};

export default Post;

// const Post = (props) => {
//    return (
//      <div>
//     <div className="item">{props.message}<img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="" /></div>
//     <span>Like</span> {props.likeCount}
//     </div>
//   )
// };

