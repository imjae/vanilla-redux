import { createStore } from "redux";
// createStore는 데이터를 넣는 곳 생성 
// 데이터 관리
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");



const conutModifier = (count  = 0, action) => {
  if(action.type === "ADD") {
    return count + 1;
  } else if(action.type === "MINUS") {
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

add.addEventListener("click", () => countStore.dispatch({type: "ADD"}));
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}));