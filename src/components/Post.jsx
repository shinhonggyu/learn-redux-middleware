import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, body } = post;
  const navigate = useNavigate();

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default Post;
