import React from 'react';
<<<<<<< HEAD
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
=======
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {
<<<<<<< HEAD
  const age = 20;
  const isAdult = age >= 19;
  const isEven = age % 2 === 0;

  const enter = isAdult ? <PassComponent /> : <NotPassComponent />
  const win = isEven ? <LuckyComponent /> : <UnLuckyComponent />
  const result = (
    <div>
      <p>당신의 나이는 {age}이므로,</p>
      {enter}
      {win}
    </div>
  )
  return (
    <>
      {result}
    </>
=======

  const age = 40
  const adultCheck = age >=19
  const isEven = age % 2 === 0

  return (
    <div>
      <p>{adultCheck ? "입장 가능":"입장 불가"}</p>
      <p>{isEven ? "당첨" : ""}</p>
    </div>
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
  );
};

export default Jsx05;