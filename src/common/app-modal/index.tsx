import { Modal } from 'antd';
import { useEffect, useState } from 'react';

export interface ModalProps {
  title?: string;
  open: boolean;
  content?: string;
  handleOk?: () => void;
  handleClose: () => void;

  seconds: number;
}
export const AppModal: React.FC<ModalProps> = ({
  title,
  open,
  handleOk,
  handleClose,
  content,
  seconds,
}) => {
  const [count, setCount] = useState<number>(seconds);

  useEffect(() => {
    let idModal: any = null;
    if (open) {
      idModal = setInterval(() => {
        setCount((pre) => pre - 1);
      }, 1000);
    }

    return () => {
      clearInterval(idModal);
    };
  }, [open]);

  useEffect(() => {
   
    if (count === 0) {
      handleClose();
      setCount(seconds);
    }
  }, [count, handleClose]);

  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleClose}
      closable={false}
      footer={null}
    >
      <p style={{ textAlign: 'center' }}>{content}</p>
    </Modal>
  );
};
