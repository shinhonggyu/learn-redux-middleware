/* 
프로미스를 다루는 리덕스모듈
1. 프로미스가 시작, 성공, 실패 했을때 다른 액션을 디스패치.
2. 각 프로미스마다 thunk 함수를 만들어주어야한다.
3. 리듀서에서 액션에따라 로딩중,결과,에러 상태변경.
*/
import * as postsAPI from "../api/posts";
import {
  createPromiseThunk,
  reducerUtils,
  handleAsyncActions,
} from "../lib/asyncUtils";

// 액션타입

// 포스트 여러개 조회하기
const GET_POSTS = "GET_POSTS"; // 요청 시작
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS"; // 요청 성공
const GET_POSTS_ERROR = "GET_POSTS_ERROR"; // 요청 실패

// 포스트 하나 조회하기
const GET_POST = "GET_POST"; // 요청 시작
const GET_POST_SUCCESS = "GET_POST_SUCCESS"; // 요청 성공
const GET_POST_ERROR = "GET_POST_ERROR"; // 요청 실패

// thunk 함수

// 액션 생성함수 대신 바로 액션객체로 만들어줘도됨.
// 아주 쉽게 thunk 함수를 만들수있게 함수로리팩토링.
export const getPosts = createPromiseThunk(GET_POSTS, postsAPI.getPosts);
export const getPost = createPromiseThunk(GET_POST, postsAPI.getPostById);

//초깃값
//initialState 쪽도 반복되는 코드를 initial() 함수를 사용해서 리팩토링
const initialState = {
  posts: reducerUtils.initial(),
  post: reducerUtils.initial(),
};

// 리듀서 함수
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncActions(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActions(GET_POST, "post")(state, action);
    default:
      return state;
  }
}
