import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body } = post;
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link to={"/2"}>값이바뀌기전 클린업함수 호출</Link>
    </div>
  );
};

export default Post;
