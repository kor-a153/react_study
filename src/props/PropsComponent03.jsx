import React from 'react';

<<<<<<< HEAD
const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  const style = {fontSize, color}
  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기
  console.log(style)

=======

const PropsComponent03 = ({name, age, hobby, fontSize, color}) => {
  const style = {fontSize, color}

  // 1. 이름, 나이, 취미, 폰트 색상, 컬러를 props로 넘겨서 화면에 모두 출력하기
  // 2. 폰트 사이즈, 컬러를 적용시키기
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
  return (
    <div style={style}>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>취미: {hobby}</p>
    </div>
  );
};

export default PropsComponent03;