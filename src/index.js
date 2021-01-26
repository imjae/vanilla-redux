const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

// 데이터가 변경되었을 때 바닐라는 updateText함수와같이
// 데이터가 ㅂ녀경되었다고 알려주기 위한 함수를 사용해야한다.
// 이것이 리덕스가 멋진 이유중 하나다.
const updateText = () => {
  number.innerText = count;
}

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);