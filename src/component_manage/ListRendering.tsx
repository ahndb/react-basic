import React from 'react'

// 리스트 렌더링 :
// - JSX 내부에서 반복적으로 렌더링하는 요소에 대해 반복 처리
// - JSX 안에서는 for 혹은 while과 같은 반복문을 사용할 수 없음
// - 리스트의 각종 메서드를 활용해야함

interface Human{
  name: string;
  age: number;
  job: string;
}

function ListItem ({name, age, job}: Human) {
  
  return (
    <div>
      <h1>이름 : {name}</h1>
      <h4>나이 : {age}</h4>
      <h4>직업 : {job}</h4>
    </div>
  )

}

export default function ListRendering() {

  const humans: Human[] = [
    {
      name:'홍길동',
      age:20,
      job:'학생'
    },

    {
      name:'김철수',
      age:30,
      job:'개발자'
    },

    {
      name:'이영희',
      age:27,
      job:'경찰'
    },
    
    {
      name:'김민수',
      age:12,
      job:'학생'
    }
  ];

  const students = humans.filter(item => item.job === '학생');

  // {humans.forEach((item, index) => {
  //   return <ListItem name={item.name} age={item.age} job={item.job}/>
  // })} forEach 리턴이 잡혀있다 하더라고 결과가 void나 undefined가 됨


  // {humans.map((item, index) => {
  //   return <ListItem name={item.name} age={item.age} job={item.job}/>
  // })} 결과가 배열로 나옴 [ListItem, ListItem, ListItem, ListItem]
  
  //* - JSX에 리스트 고급 함수를 사용할 때 결과를 반환하는 함수를 사용해야함
  //* - forEach 사용하지말고 map 사용하기
  //* - 특정 조건에 해당하는 요소만 출력하고 싶으면 filter 메서드를 응용해서 사용해야 함

  //* - 완전 단순한 반복(횟수 반복)을 사용할 땐 반복하고자하는 횟수의 길이를 가지는 배열을 생성해서 해당 배열로 반복작업

  const count = new Array(3).fill(0);

  return (
    <div>
      {/* 배열을 JSX에 반환하면 배열의 각 요소를 하나씩 꺼내와서 렌더링 */}
      {/* {['요소1', '요소2', '요소3']} */}

      {/* forEach 대신 map을 사용하는 이유, 리턴이 잡혀있다 하더라고 결과가 void나 undefined가 됨 */}

      {/* 아직도 복잡한갑다... */}
      {/* {humans.map((item, index) => {
        return <ListItem name={item.name} age={item.age} job={item.job}/>
      })} */}

      {/* 스프레드로 각 요소 분해 하기, 이것도 더 간단하게 가능하네.. */}
      {humans.map((item, index) => {
        return <ListItem key={index} {...item}/>
      })}

      {/* 매개변수 하나면 괄호 지울수 있음, 리턴값이 하나면 return과 중괄호 제거 가능 */}
      {humans.map(item => <ListItem key={item.name} {...item}/>)}
      {students.map(item => <ListItem key={item.name} {...item}/>)}
      {count.map(item => <h1 key={item}>반복아이템</h1>)}

      {/* <ListItem name='홍길동' age={20} job='학생'/>
      <ListItem name='김철수' age={30} job='개발자'/>
      <ListItem name='이영희' age={27} job='경찰'/>
      <ListItem name='김민수' age={12} job='학생'/> */}
    </div>
  )
}
