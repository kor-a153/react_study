import { create } from "zustand";
import { combine } from "zustand/middleware";

// 기본구조
// const store = create(combine(
//   {    //초기값 자리
//     name: "홍길동",
//     age: 20,
//   },  
//   (set) => ({ //리턴값이 객체 인거라서 중괄호 생략하고 소괄호 넣고 객체로 넣고 싶으니 다시 중괄호
//     //setter
//   })
// ))


const useCountStore = create(combine(
  {
    count : 0
  },
  (set) => ({   // ()소괄호는 리턴 {}중괄호는 객체
    increase: () => set((state) => ({count: state.count +1})), //값을 증가시킬수 있는게 세터밖에 없으니 중괄호자리에 세터를 넣음
    decrease: () => set((state) => ({count: state.count -1}))  //둘다 상태 안에 있는 카운트라서 state.을 붙여줌.
  })
))

export default useCountStore;