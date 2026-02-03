import { createContext, useState } from "react";

// 1. 생성 
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
export const AnimalsProvider = ({children}) => {
  
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: (useState) => { //insert에 useState값들이 순차적으로 들어가면서 반복돌며 버튼을 생성하는 기능.
        <button>{useState}</button>
      }, 
      remove: () => {}
    }
  }

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


