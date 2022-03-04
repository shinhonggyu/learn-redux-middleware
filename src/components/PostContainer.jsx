// PostPage 에서 라우트의 URL 파라미터에서 id를 받아와서 PostContainer 렌더링 -> Post 렌더링
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../modules/posts";
import Post from "./Post";

const PostContainer = ({ postId }) => {
  const { loading, data, error } = useSelector(
    (state) =>
      state.posts.post[postId] || { loading: false, data: null, error: null }
  );
  const dispath = useDispatch();

  useEffect(() => {
    dispath(getPost(postId));
  }, [dispath, postId]);

  if (loading && !data) return <h1>로딩중...</h1>;
  if (error) return <h1>data fetching 에러</h1>;
  if (!data) return null;

  return <Post post={data} />;
};

export default PostContainer;
