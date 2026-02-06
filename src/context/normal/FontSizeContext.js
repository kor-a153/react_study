import { createContext, useState } from 'react'

// 1. Context 생성 및 초기화
export const FontSizeContext = createContext({
  state: {fontSize: ""}, //스테이트로 폰트사이즈 값을 받겠고, 초기값을 ""로 하겠다
  actions: {setFontSize: () => {}}, // 위와 내용 같음. 화살표함수의 값을 비워두고 다른곳에서 받겠다.
})

export const FontSizeProvider = ({children}) => { // 폰트사이즈 프로바이더자체를 내보낼수 있게 하겠다.

  const [fontSize, setFontSize] = useState("20px")
  const value = {
    state: {fontSize},
    actions: {setFontSize}
  }

  return (
    <FontSizeContext.Provider value={value}>  //자녀에대해 값을 출력하겠다.. ?
      {children}
    </FontSizeContext.Provider>
  )
}