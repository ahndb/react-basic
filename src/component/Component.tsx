import React from 'react'


export default function Component() {
  // 함수형 컴포넌트의 return
  // - 해당 컴포넌트가 렌더링할 요소를 지정 (반환)
  // - html 처럼 보이지만 html이 아님
  // - 여러가지 자바스크립트 *연산자*를 사용할 수 있음
  
  // - 반드시 하나의 요소만 반환이 가능 (0개 x, 2개 이상x)
  // - 하나의 컴포넌트가 다수의 요소를 반환하고자 하면 최상단에 해당요소를 묶어주는 부모 요소를 포함해야 함
  //* - 부모 요소로 묶을 때 <></>를 이용하여 의미없는 태그를 생성 할 수 있음.
  
  //* - 반드시 return 바로 뒤에 반환 요소가 있어야 함
  return (
    <>
      <h1>Component</h1>
      <h2>Component</h2>
    </>
  );
}
