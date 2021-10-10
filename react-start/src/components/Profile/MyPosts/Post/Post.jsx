import './Post.css';

const Post = (props) => {
   return (
     <div>
    <div className="item">{props.text}<img src="https://img2.freepng.ru/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg" alt="" /></div>
    <div><span>{props.message}</span></div>
    </div>
  )
};

export default Post;