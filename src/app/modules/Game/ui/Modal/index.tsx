import React, { ReactNode } from "react";
import S from "./styles";

interface ModalProps {
  active: boolean;
  onClose?: () => void;
  closable: boolean;
  backgroundColor?: string;
  children: ReactNode;
  title?: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  active,
  onClose,
  closable,
  backgroundColor,
  children,
  title,
  disabled,
}) => {
  const hideModal = () => {
    if (closable && onClose) {
      onClose();
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      hideModal();
    }
  };

  return (
    <S.ModalOverlay active={active} onClick={handleOverlayClick}>
      <S.ModalContainer
        active={active}
        backgroundColor={backgroundColor}
        disabled={disabled}
      >
        {closable && <S.CloseIcon onClick={hideModal}>×</S.CloseIcon>}
        {children}
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default Modal;
