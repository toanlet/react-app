import React from 'react';
import { Main } from '../../main';
import { SideNav } from '../side-nav';
import { UserProvider } from '../../context/user-context';

interface DashboardProps {
  title?: string;
  userName?: string;
  actived?: string;
}

export const Dashboard: React.FC<DashboardProps> = ({
  title,
  userName,
  actived,
}) => {
  return (
    <UserProvider>
      sidenav
      <SideNav {...{ actived }} />
      main
      <Main />
    </UserProvider>
  );
};

export default Dashboard;
