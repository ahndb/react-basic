import React, { useEffect, useState } from 'react'

// Hook 함수 : 
// - react에서 컴포넌트의 상태와 생명주기에 따른 기능을 수행할 수 있도록 해주는 특별한 함수
//? - use로 시작되는 함수 (useState)
// - hook 함수의 종류
//* - useState : 컴포넌트의 상태 관리를 가능하게 해주는 함수, 상태 생성, 업데이트, 값에 접근
//* - useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행할 수 있도록 하는 함수, 렌더링의 단계(mount(초기입력시렌더링), update(mount되고나서 변경이 되는 렌더링), unmount(화면에서 사라지는 단계) 있음)에서  수행되는 함수
//* - useRef : DOM 요소에 직접 접근하기 위한 함수, 렌더링 사이에 값을 기억하는 함수

//? 2개는 보통 합쳐서 사용하는일이 많음, 복잡함
//* - useContext : 컴포넌트 트리 상에서 전역적으로 상태를 공유하고자 할때 사용하는 함수 (상태를 만드는 작업)
//* - useReducer : 상태 로직을 관리하는 함수, 상태 업데이트 로직을 컴포넌트 외부로 옮길 수 있게하여 코드관리를 조금더 수월하게 해줌

//* - useCallback : 메모리 내에서 함수를 재사용할 수 있도록 하는 함수, 렌더링 없이 특정 함수를 다시 호출할 수 있도록 해줌
//* - useMemo : 메모리에 계산된 값(함수의 결과)을 저장하여 함수 재실행 없이 사용할 수 있도록 하는 함수


export default function HookComponent1() {

  const [count, setCount] = useState<number>(0);
  const [flag, setFlag] = useState<boolean>(false);

  const addCount = () => {
    setCount(count+1);
  }; 
  
  const reverseFlag = () => {
    setFlag(!flag)
  }; 

  // useEffect : 
  // - 컴포넌트의 생명주기에 따라 특정 함수를 수행하도록 하는 훅 함수
  // - useEffect(실행할 함수, 스코프할 상태 배열);
  //? - 개발자 모드에서는 '마운트 - 언마운트가 한번 실행'되면서 테스트 후 다시 정상 실행

  // 컴포넌트 마운트시에만 실행
  useEffect(()=>{
    // console.log('useEffcet');
  }, []);

  //? 스코프할 상태 배열을 지정하지 않으면 모든 상태가 변경될 때마다 실행됨(flag를 찍어도 count가 올라감)
  useEffect(()=>{
    //? 스코프할 상태 배열을 지정하지 않은 effect에서 상태를 변경하면 무한 실행됨(디도스)

    // setFlag(!flag);
    // console.log('useEffcet');
  });

  //? 스코프할 상태 배열에 상태를 지정하면 지정한 상태가 변경될 때마다 실행됨
  useEffect (()=> {
    //* 배열에 count를 스코프로 보고 있는데 함수에 count를 변경하면 값을 변경하고 또 변경이 이뤄지면서 무한반복이 되버림
    //* 스코프할 상태 배열에 지정한 상태를 해당 effect에서 변경하면 무한 실행됨 
    // setCount(count + 1)
    // console.log('count가 변경됨');
    // console.log(count);
  },[count]);

  useEffect (()=> {
    // console.log('count 또는 flag가 변경됨');
    // console.log(count);
    // console.log(flag);
  },[count, flag]);

  const SubComponent = () => {
    useEffect (()=> {
      // console.log('mount시 실행');
      // return () => {
      //   console.log('unmount시 실행');
      // }
    },[]);

    return <h1>SubComponent</h1>
  };



  return (
    <div>
    {count} 
    {flag && <SubComponent />}
    <button onClick={addCount}>+</button>
    <button onClick={reverseFlag}>!</button></div>
  )
}

