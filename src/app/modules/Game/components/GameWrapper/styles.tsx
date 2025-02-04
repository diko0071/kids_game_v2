import styled, { keyframes } from "styled-components";
import { COLORS } from "../../constants";

const headMovement = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  25% {
    transform: translateX(10px) rotate(5deg);
  }
  50% {
    transform: translateX(0) rotate(0deg);
  }
  75% {
    transform: translateX(-10px) rotate(-5deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
`;

const Container = styled.div`
  box-sizing: border-box;
`;

const SVGWrapper = styled.div<{ currentColor?: string }>`
  display: inline-block;
  animation: ${headMovement} 6s infinite ease;

  .cls-1 {
    fill: ${({ currentColor }) => currentColor || "#fff"};
  }
  .cls-2 {
    fill: #2b2a2b;
  }
  .cls-3 {
    fill: #f7f7f7;
  }
  .cls-4 {
    fill: ${({ currentColor }) => currentColor || "#d3d3d3"};
  }
  .cls-5 {
    fill: #fdb0eb;
  }
`;

const Buttons = styled.div<{ rows?: number }>`
  display: grid;
  grid-template-columns: repeat(${({ rows }) => rows || 3}, 1fr);
  gap: 16px;
  margin-top: 32px;
`;

const Message = styled.div<{ isCorrect: boolean }>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 500;
  color: ${({ isCorrect }) => (isCorrect ? COLORS.green : COLORS.red)};
  background: ${COLORS.white};
  width: fit-content;
  border-radius: 10px;
  padding: 8px 12px;
  margin: 0 auto;
`;

const MessageWrapper = styled.div`
  min-height: 48px;
  margin: 12px 0;
`;

const FigureWrapper = styled.div<{ color: string; isParent?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ color, isParent }) =>
    isParent
      ? `
    background: ${color};
    border-radius: 50%;
    padding: 20px;
    width: 150px;
    height: 150px;
  `
      : `
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  `};

  & svg {
    & > * {
      fill: ${({ color, isParent }) => (isParent ? COLORS.pink : color)};
    }
  }
`;

export default {
  Container,
  SVGWrapper,
  Buttons,
  MessageWrapper,
  Message,
  FigureWrapper,
};
