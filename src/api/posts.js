import axios from "axios";

// 포스트 목록을 가져오는 비동기 함수
export const getPosts = async () => {
  const { data } = await axios.get("/posts");
  return data;
};

// ID로 포스트를 조회하는 비동기 함수
export const getPostById = async (id) => {
  const { data } = await axios.get(`/posts/${id}`);
  return data;
};
