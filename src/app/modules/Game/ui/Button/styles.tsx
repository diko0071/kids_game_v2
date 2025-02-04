import styled from "styled-components";
import { COLORS } from "../../constants";

const Button = styled.button<{
  backgroundColor?: string;
  textColor?: string;
  isHuge?: boolean;
  isMedium?: boolean;
  isSelected?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: ${({ isHuge }) => (isHuge ? "16px 24px" : "8px 12px")};
  white-space: nowrap;
  min-height: ${({ isHuge, isMedium }) => {
    if (isHuge) {
      return "80px";
    }

    if (isMedium) {
      return "64px";
    }

    return "48px;";
  }};
  height: fit-content;
  font-size: ${({ isHuge, isMedium }) => {
    if (isHuge) {
      return "42px";
    }

    if (isMedium) {
      return "32px";
    }

    return "18px;";
  }};
  font-weight: bold;
  color: ${({ textColor }) => textColor || COLORS.blue};
  background: ${({ backgroundColor }) => backgroundColor || COLORS.lightBlue};
  border-color: ${({ isSelected }) =>
    isSelected ? COLORS.darkPink : "transparent"};
  border-style: solid;
  border-width: 4px;
  border-radius: ${({ isHuge }) => (isHuge ? "100px" : "10px")};
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;
export default { Button };
