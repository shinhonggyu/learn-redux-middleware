// 액션 타입, 액션 생성함수, 리듀서를 한 파일에 작성하는 Ducks패턴

// 액션 타입
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생섬함수, 액션을 반환
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 액셩 생성함수, Thunk함수
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

const initialState = 0;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
