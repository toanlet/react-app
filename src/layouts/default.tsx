import React from 'react';
import { Outlet } from 'react-router';
import { Footer } from 'src/common/footer';
import { Header } from 'src/common/header';
import { ModalAction } from 'src/common/modal-action';
import { useShowModal } from 'src/common/modal-action/useShow';

export const DefaultLayout: React.FC<any> = () => {
  const { isShow } = useShowModal();
  return (
    <div>
      <Header />
      <div className="children-outlet">
        <Outlet />

        <ModalAction isShow={isShow} />
      </div>

      <Footer />
    </div>
  );
};
