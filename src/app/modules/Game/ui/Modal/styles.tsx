import styled, { css, keyframes } from "styled-components";
import { COLORS } from "../../constants";

const fadeInOverlay = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const scaleInModal = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ModalOverlay = styled.div<{ active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ active }) => (active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  ${({ active }) =>
    active &&
    css`
      animation: ${fadeInOverlay} 0.3s ease-out;
    `}
`;

const ModalContainer = styled.div<{
  active: boolean;
  backgroundColor?: string;
  disabled?: boolean;
}>`
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.pink};
  ${({ disabled }) => disabled && "pointer-events: none;"};
  padding: 10px 5px;
  border-radius: 16px;
  width: 90vw;
  max-width: 800px;
  height: 80vh;
  text-align: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ active }) =>
    active &&
    css`
      animation: ${scaleInModal} 0.3s ease-out;
    `}

  @media only screen and (max-width: 768px) {
    width: 150vw;
    height: 120vh;
  }
`;

const ModalTitle = styled.div`
  color: ${COLORS.orange};
  font-size: 24px;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 10px;
  font-size: 40px;
  color: ${COLORS.orange};
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    color: ${COLORS.darkPink};
  }
`;

export default { ModalOverlay, ModalContainer, CloseIcon, ModalTitle };
