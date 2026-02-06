import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from './store/useAuthStore';

const AuthLayout = () => {

  const {
    isLogin, previousUrl, // 이전값을 항상 가지고 있어야되는데 라우터에서 이걸 해결함
  } = useAuthStore();

  if(!isLogin) return <Navigate to={"/"} replace={true} />

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;