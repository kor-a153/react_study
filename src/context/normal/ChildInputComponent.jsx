import React from 'react';

const ChildImputComponent = () => {
  return (
    //Context값 사용 !
    //폰트 사이즈를 입력하고 , 엔터를 누르면
    //그 폰트사이즈로 변경하기
    <div>
      <p>😎😎</p>
      <input type="text" placeholder='폰트사이즈를 입력하세염' />
    </div>
  );
};

export default ChildImputComponent;