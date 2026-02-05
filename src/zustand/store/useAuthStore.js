import { create } from "zustand";
import { combine, persist } from "zustand/middleware";

export const initialMember = { //계속 쓸거니까 요래 만들어 놓자
      memberEmail: "",
      memberPassword: "",
      memberName: ""
}

const useAuthStore = create(persist(combine(
  {
    isLogin: false,
    currentMember: initialMember,
    previousUrl: "/"
  },
  (set) => ({
    setIsLogin: (loginStatus) => set((state)=> ({  //객체로 state 리턴
      // ...state, //이거를 생략 가능.
      isLogin: loginStatus
    })) ,
    setCourrentMember: (member) => set((state) => ({
      currentMember : member
    })),
    setPreviousUrl: (url) => set((state) =>  ({
      previousUrl: url
    }))
  })
), { //괄호를 잘 봐야함. 어디서 중괄호를 넣을건지
  name : "auth-store"
}))

export default useAuthStore