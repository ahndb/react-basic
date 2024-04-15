import React, { useRef, useState } from 'react'

export default function HookComponent2() {

  const [image, setImage] = useState<string>('');
  // useRef :
  // - DOM 객체를 직접 다루고자 할 때, 혹은 렌더링 없이 값을 변경 저장하고자 할 때 사용
  //? - const DOM객체참조변수 = useRef<DOM요소타입>();
  //? DOM객체를 참조하기 위해서 useRef를 사용하면 참조할 요소의 ref={} 속성에 해당 참조변수를 지정해야함

  const inputRef = useRef<HTMLInputElement>(null); // inputRef => HTMLInputElement | null 타입

  const onButtonClickHandler = () => {
    //* ref의 참조객체는 해당 변수의 current 속성에 들어있음.
    //* 참조변수(null 혹은 undefined를 가질 수 있는 object 타입의 변수)에서
    //* 특정 속성 및 메서드를 호출하려 할때 null 혹은 undefined가 아닌 상태에서만
    //* 작업을 수행하도록 하려면 참조변수?.속성 혹은 참조변수?.함수()로 실행  
    // inputRef.current?.focus(); //특정한 값을 변수에 넣으려고할땐 안정적이지 못 함
    
    if (inputRef.current) inputRef.current.focus();

  };

  const onInputChangeHandler = () => {
    const { current } = inputRef;
    if (!current) return;
    if (!current.files) return;

    const file = current.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onloadend = () => {
      setImage(fileReader.result as string);
    }
  };

  return (
    <div>
      <img src={image} alt="" />
      <input type='file' ref={inputRef} onChange={onInputChangeHandler} />
      <button onClick={onButtonClickHandler}>🔴</button>
    </div>
  )
}
