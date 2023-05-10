import React, { createContext, useContext, useState } from 'react';

interface ModalType {
  isOpen: boolean;
  handleClose: () => void;
  handleOk: () => void;
  handleOpen: () => void;
}

const defaultValue = {
  isOpen: false,
  handleClose: () => {},
  handleOk: () => {},
  handleOpen: () => {},
};
export const ModalContext = createContext<ModalType | null>(defaultValue);
export const useModalContext = () => useContext(ModalContext)!;
export const ModalProvider: React.FC<any> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOk = () => {};
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, handleClose, handleOk, handleOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
};
