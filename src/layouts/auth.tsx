import React from 'react';
import { Outlet } from 'react-router';
import './styles.scss';
import Logo from 'src/assets/react.svg';
import { ToastMessage } from 'src/common/toast-message';

export const AuthLayout: React.FC<any> = () => {
  return (
    <div className="auth-layout">
      <div className="left">
        <img src={Logo} alt="logo" width={120} />
        <h3>Welcome Back</h3>
      </div>
      <div className="right">
        <Outlet />
        <ToastMessage />
      </div>
    </div>
  );
};
