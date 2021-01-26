import { createStore } from "redux";
// createStore는 데이터를 넣는 곳 생성 
// 데이터 관리
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");


// store의 dispatch함수로인해 실행되는 reducer함수의 두번째 인자인 action에 객체를 넘겨줄때
// 해당 객체의 type 프로퍼티에 문자열을 넘겨준다면 브라우저는 잘못된값이 넘어와도 에러를 호출하지 않는다.
// 아래와 같이 const 변수로 선언하고, type에 해당 변수를 넘겨준후, reducer에서 조건 체크를 동일한 변수로
// 해 준다면, 휴먼에러를 대응해 줄수 있다.
const ADD = "ADD";
const MINUS = "MINUS";

const conutModifier = (count  = 0, action) => {
  if(action.type === ADD) {
    return count + 1;
  } else if(action.type === MINUS) {
    return count - 1;
  } else {
    return count ;
  }
};

const countStore = createStore(conutModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

add.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));