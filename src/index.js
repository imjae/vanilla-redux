import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
    // console.log("reducer");
  switch (action.type) {
    case ADD_TODO:
      //return state.push(action.text);
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];

    default:
      return state;
  }
};
// 절대 mutate state는 사용하지 말자.
const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
//   console.log("onSubmit");
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: todo });
};

form.addEventListener("submit", onSubmit);

// state를 수정할수 있는 유일한 방법은 reducer의 action 뿐이다. 이게 리덕스의 가장 큰 장점
// mutation(변형) 이란 ?..
// 배열에 임의로 push를 하는 행동 -> 상태를 수정하는 행동
// state를 임의로 수정하는것이 아니라 state 배열을 새로운 배열에 카피한후, 추가해준다
// 새로운 state를 create 하고 그 새로운 state를 return 해준다 <= 중요
