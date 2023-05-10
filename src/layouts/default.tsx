import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from 'src/common/footer';
import { Header } from 'src/common/header';

export const DefaultLayout: React.FC<any> = () => {
  return (
    <div>
      <Header />
      <div className="children-outlet">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};
