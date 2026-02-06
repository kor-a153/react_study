import React, { useEffect } from 'react';
import useAuthStore from './store/useAuthStore';
import { Outlet, useLocation } from 'react-router-dom';

const ZustandLayout = () => {
  
  const {
    isLogin, currentMember, previousUrl,
    setCourrentMember, setPreviousUrl, setIsLogin
  } = useAuthStore();

 // URL , URI
const path = useLocation().pathname;
 useEffect(()=> {
  setPreviousUrl(path)
 } , [path])


  return (
    <div>
      <h1>현재경로: {previousUrl || "없음"}</h1>
      <h1>현재유저: {currentMember.memberName || "없음"}</h1>
      <h1>로그인상태: {isLogin ? "로그인" : "비로그인"}</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ZustandLayout;