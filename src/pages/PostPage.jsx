import PostContainer from "../containers/PostContainer";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const params = useParams();
  const id = parseInt(params.id, 10);

  return <PostContainer postId={id} />;
};

export default PostPage;
