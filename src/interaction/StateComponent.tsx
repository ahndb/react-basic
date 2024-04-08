import React, { ChangeEvent, useState } from 'react'

// 상태(status)
// - 각각의 컴포넌트가 가지는 데이터
// - 컴포넌트의 렌더링 결과에 영향을 미침
// - 컴포넌트는 독립적인 상태를 가질 수 있음
// - 상태가 변경되면 컴포넌트가 리렌더링 됨

export default function StateComponent() {

  // status 선언 :
  // - useState 함수로 함수를 선언할 수 있음
  // - 선언방법 : const[상태변수, 상태변경함수] = useState<상태변수타입>(상태변수초기값);

  // let count = 0;
  const [count, setCount] = useState<number>(0);
  // let total: number = 0;
  const [total, settotal] = useState<number>(0);
  // let favorite: string [] = [];
  const [favorites, setFavorites] = useState<string[]>(['사과']);
  
  const [favorite, setFavorite] = useState<string>('');

  const onCountAddHandler = () => {
    //! 상태 변수는 반드시 상태변경함수로 변경을 해야 리렌더링됨

    //* 상태변경 함수를 통해서 함수를 변경한다고 바로 적용되지 않음
    //* 리렌더링된 후 상태변경 함수가 적용된다.

    //? 덮어씌어짐의 개념이라 앞에 count가 다 300으로 적용됨
    // setCount(count + 1);
    // console.log(count);
    // setCount(count + 20);
    // console.log(count);
    // setCount(count + 300); 
    // console.log(count);

    // count++; 상수라서 안됨

    //? 함수는 누적이 되서 +3씩 올라가는 연속 작업이 가능함
    //* setCount(count + 1); 1이 + 된(변경) 상태에서 올라가기 때문에 4가 나옴
    // console.log(count);
    //! 상태 변경 함수에 콜백 함수를 전달하면 해당 콜백 함수는 상태 변경 작업을 누적해서 함
    // setCount(count => count + 1);
    // console.log(count);
    // setCount(count => count + 1);
    // console.log(count);
    // setCount(count => count + 1);
    // console.log(count);
    //* setCount(count + 1); 위 함수가 다 돌고 다시 1로 덮어씌어져서 1이 나옴
    // console.log(count);

    //? 한템포 두템포 늦게 작업된것같으면 아래의 문제를 의심해보자
    //* 변경된 상태를 사용하고 싶을 때 해결방법, 임시 변수를 사용하여 간접 사용
    const tmp = count + 1; //* 이렇게 간접적인 작업을 하고 그 값을 넣어주면 바로 적용됨
    setCount(tmp);
    settotal(total + tmp);

  };

  //? Input 요소의 값을 가져오고자 할땐 onChange 이벤트의 .target.value로 가져옴
  const onInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    // 가져온 .target.value 값을 상태에 지정
    setFavorite(event.target.value);
  };

  const onAddListHandler = () => {
    //? 상태가 배열 혹은 객체이면 각각에 대해 요소를 추가, 변경이 일어나도 상태가 변경된 것으로 인식하지 않음(실제 주소 변경이 일어나지 않아서..)
    // 상태가 변경된 것으로 인식하게 하고 싶으면 새로운 배열 혹은 객체를 생성하여 상태를 변경해야 함 (일반적으로 복사해서 변경)
    //* 함수 안에서 새 배열을 만들어서 넣어주기
    // favorites.push(favorite);
    //* const newFavorites = favorites.map(item => item)
    // console.log(newFavorites);
    // setFavorites(newFavorites)

    setFavorites([...favorites, favorite]); //기존에 것을 스프레드 시키고 favorite으로 추가되는 애들 넣기(그냥 복사할 때)
    // ['사과', '바나나', '포도'] 참조형태가 아니라서 없어지지는 않음
    setFavorite('');
  };

  return (
    <>
      <button onClick={onCountAddHandler}>+</button>
      <h1>{count}</h1>
      <h1>{total}</h1>

      <hr />
      
      {/* value값을 맞추면 input창과 h4에 값이 같이지며 ''이 됨, 
      Input이 만약 상태를 변경한다면 value로 그 상태를 지정해야 불일치가 발생하지 않음 */}
      <input onChange={onInputHandler} type="text" value={favorite} /> 
      <button onClick={onAddListHandler}>추가</button>
      <h4>{favorite}</h4>
      <ul>
        {favorites.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </>
  )
}
