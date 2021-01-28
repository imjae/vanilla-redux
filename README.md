# Vanilla Redux

# [일지 작성]
### 2021-01-26
> 데이터가 변경되었을 때 바닐라는 updateText함수와같이
> 데이터가 변경되었다고 알려주기 위한 함수를 사용해야한다.
> 이것이 리덕스가 멋진 이유중 하나다.
```javascript
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
```

### 2021-01-27
> redux의 createStore는 간단하게 데이터를 보관하는 곳으로 생각하면 된다.
```javascript
const conutModifier = (count  = 0, action) => {
  ...
};

const countStore = createStore(conutModifier);
```
> 위 코드와 같이 createStore(reducer) 함수를 사용해 store를 생성하고,
> 해당 store와 인자로 넣어준 reducer함수를 연결한다.
> 그리고 해당 store의 dispatch함수를 실행해 주면 리듀서가 실행된다.
```javascript
const ADD = "ADD";
add.addEventListener("click", () => countStore.dispatch({type: ADD}));

const conutModifier = (count  = 0, action) => {
  if(action.type === ADD) {
    return count + 1;
  }
  ...
};
```
> store의 dispatch함수로인해 실행되는 reducer함수의 두번째 인자인 action에 객체를 넘겨줄때
> 해당 객체의 type 프로퍼티에 문자열을 넘겨준다면 브라우저는 잘못된값이 넘어와도 에러를 호출하지 않는다.
> 아래와 같이 const 변수로 선언하고, type에 해당 변수를 넘겨준후, reducer에서 조건 체크를 동일한 변수로
> 해 준다면, 휴먼에러를 대응해 줄수 있다.
```javascript
countStore.getState();
```
> 와 같이 해당 store에 저장된 state변수를 언제든지 불러올수 있다.
> 이때 중요한건 store에 연결된 reducer함수가 return해주는 값이 해당 store의 데이터 라는 것이다.

### 2021-01-29
> 1. 27일에 했던 소스 index_old.js로 변경후 새로운 index.js 작성
> 2. vanilla + redux 로 간단한 todo list 만듦.
> 3. state를 수정할때는 절대로 직접적인 수정을 하면 안된다. state를 수정할수 있는 유일한 방법은 reducer의 action 뿐이다. 이게 리덕스의 가장 큰 장점
```javascript
const reducer = (state = [], action) => {
    // console.log("reducer");
  switch (action.type) {
    case ADD_TODO:
      return state.push(action.text); // 잘못된 방법
      return [...state, { text: action.text, id: Date.now() }];
  }
};  

state.push(action.text); 와 같은 형식으로 state 수정을 하면 안된다.  
새로운 state를 create 하고 그 새로운 state를 return 해준다 <= 중요
```
 
  
> 4. delete 디스패치에 id 넘기는 부분까지 진행
> 디스패치 함수의 인자값으로 오브젝트를 넘기기 보다 해당 오브젝트를 반환하는 새로운 함수롤 생성해 주는게 구조적으로 좋다.
```javascript
const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const dispatchDeleteTodo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};
```