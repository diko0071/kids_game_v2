import React from "react";
import S from "./styles";
import Icon from "../Icon";

interface ButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string;
  textColor?: string;
  iconName?: string;
  isHuge?: boolean;
  isMedium?: boolean;
  isSelected?: boolean;
  children?: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  backgroundColor,
  textColor,
  iconName,
  isMedium,
  isHuge,
  isSelected,
  children,
}) => (
  <S.Button
    onClick={onClick}
    backgroundColor={backgroundColor}
    textColor={textColor}
    isHuge={isHuge}
    isMedium={isMedium}
    isSelected={isSelected}
  >
    {!!iconName && <Icon name={iconName} />}
    {text}
    {children}
  </S.Button>
);

export default Button;
