import React, { useState } from 'react';
import A from './A';
import CharContext from './CharContext';

const CharContainer = () => {
  const [fontSize, setFontSize] = useState("30px")
  const value = {
    color: "blue", 
    fontSize: fontSize, 
    setFontSize: setFontSize
  }

  return (
    <CharContext.Provider value={value}> // 이걸로 인해 자식요소들이 부모의 값을 쓸수 있게 해줌
      <A />
    </CharContext.Provider>
  );
};

export default CharContainer;