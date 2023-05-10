import React, { createContext, useState } from 'react';

interface UserDetail {
  userDetail: string;
}
export const UserContext = createContext<UserDetail | null>(null);
export const UserDispatchContext = createContext<Function>(() => {});

export const UserProvider: React.FC<any> = ({ children }) => {
  const [userDetail, setUserDetail] = useState({ userDetail: 'User Name' });
  return (
    <UserContext.Provider value={userDetail}>
      <UserDispatchContext.Provider value={setUserDetail}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};
