import { createStore } from "redux";
// createStore는 데이터를 넣는 곳 생성 
// 데이터 관리
const MINUS = document.getElementById("add");
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

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});
console.log(countStore.getState());

// 데이터가 변경되었을 때 바닐라는 updateText함수와같이
// 데이터가 변경되었다고 알려주기 위한 함수를 사용해야한다.
// 이것이 리덕스가 멋진 이유중 하나다.