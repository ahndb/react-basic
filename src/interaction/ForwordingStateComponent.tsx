import React, { useState } from 'react'

// 컴포넌트로 상태 전달:
// - 부모요소에서 자식요소로 상태를  전달하려면 Properties로 전달

interface Sub1Props{
  count: number;
  onClickHandler: () => void;
}

function SubComponent1 ( {count, onClickHandler}: Sub1Props) {

  return (
    <h1 style={{backgroundColor:'red'}} onClick={onClickHandler}>{count}</h1>
  );
}

function SubComponent2 ( props: Sub1Props) {

  const [numbers, setNumbers] = useState<number[]>([]) 

  const onClickHandler = () => {
    numbers.push(0);
    setNumbers(numbers);
  };

  return (
    <div style={{padding: '8px', backgroundColor: 'blue'}}>
      <h2 onClick={onClickHandler}>{numbers.length}</h2>
      <SubComponent1 {...props} />
    </div>
  );
}
// 상태와 속성이 변경되면 리렌더링 됨

export default function ForwordingStateComponent() {

  const [count, setCount] = useState<number>(0);

  const onPlusButtonClickHandler = () => {
    setCount(count+1)
  };

  return (
    <>
    <SubComponent1 count={count} onClickHandler={onPlusButtonClickHandler}/>
    <SubComponent2 count={count} onClickHandler={onPlusButtonClickHandler}/>
    <button onClick={onPlusButtonClickHandler}>+</button>
    </>
  )
}
