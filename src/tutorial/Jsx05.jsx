import React from 'react';

// age 상수로 나이를 설정한다(임의)
// 19세 이상 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력

const Jsx05 = () => {

  const age = 40
  const adultCheck = age >=19
  const isEven = age % 2 === 0

  return (
    <div>
      <p>{adultCheck ? "입장 가능":"입장 불가"}</p>
      <p>{isEven ? "당첨" : ""}</p>
    </div>
  );
};

export default Jsx05;