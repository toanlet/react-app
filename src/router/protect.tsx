import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectRouter: React.FC<any> = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to={'/sign-in'} />;
  }
  return <Outlet />;
};
