import PostList from "./PostList";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "../modules/posts";

const PostListContainer = () => {
  const { loading, data, error } = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    // if (data) return;
    dispatch(getPosts());
  }, [dispatch]);

  if (loading && !data) return <h1>로딩중..</h1>;
  if (error) return <h1>데이터 페칭 에러</h1>;
  if (!data) return null;

  return <PostList posts={data} />;
};

export default PostListContainer;
