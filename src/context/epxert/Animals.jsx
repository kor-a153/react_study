import React from 'react';

const Animals = () => {

  // context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터를 치면 동물 버튼이 추가되게 하세요

  return (
    <div>
      <input type="text" placeholder='동물을 입력하세요.'/> 
      <div>
        <button >동물</button>
        <button>동물</button>
        <button>동물</button>
      </div>
    </div>
  );
};

export default Animals;