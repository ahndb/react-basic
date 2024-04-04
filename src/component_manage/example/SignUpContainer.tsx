// SignUpContainer 함수형 컴포넌트를 생성
// SignUpContainer 컴포넌트를 기본 값으로 내보내기

import React from 'react'
import InputBox from './InputBox'
import './style.css';
import './common.css';

export default function SignUpContainer() {
  return (
    <div className="sign-up-input-container">
      <InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요.' button='이메일 인증' />
    </div>
  );
}
