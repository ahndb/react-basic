import React from 'react'

export default function CurlyBraces() {

  //! Curly Braces : 
  // - JSX에서 자바스크립트를 작성하는 방법
  //* - JSX안에 { }로 영역을 지정하고 그 안에 자바스크립트를 작성

  const title = 'CurlyBraces';

  // 1. 요소의 컨텐츠에 자바스크립트 표현식을 쓰고자 할 때
  // 2. 주석 처리 -JSX에서는 HTML이 아니라 HTML 적용이 안됨
  // 3. JSX에서 스타일을 인라인 스타일로 지정할 때 
  //    - JSX에서는 인라인 스타일을 문자열로 표현 X, 객체로 표현

  return (
    <div style= {{ color: 'red'}}>
      {10 + 20} {title}     
    </div>
  )
}


const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

const listitem = [
  'Improve the videophone',
  'Prepare aeronautics lectures',
  'Work on the alcohol-fuelled engine'
]

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        // src={baseUrl + person.imageId + person.imageSize + '.jpg'}
        src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
        alt={person.name}
      />
      <ul>
        <li>listitem[0]</li>
        <li>listitem[1]</li>
        <li>listitem[2]</li>
      </ul>
    </div>
  );
}