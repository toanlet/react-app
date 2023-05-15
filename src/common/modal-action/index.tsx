interface ModalActionProps {
  isShow: boolean;
}

export const ModalAction = ({ isShow }: ModalActionProps) => {
  return <div>{isShow && <>Modal</>}</div>;
};
