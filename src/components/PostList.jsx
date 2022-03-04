import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
  const postArray = posts.map((post) => (
    <li key={post.id}>
      <Link to={`/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return <ul>{postArray}</ul>;
};

export default PostList;
