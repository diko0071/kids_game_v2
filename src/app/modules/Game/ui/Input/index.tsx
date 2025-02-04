import React from "react";
import S from "./styles";

interface InputProps {
  label?: string;
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => (
  <S.Container>
    {!!label && <S.Label>{label}</S.Label>}
    <S.Input
      type="text"
      placeholder={placeholder}
      onChange={({ target: { value: newValue } }: any) => onChange(newValue)}
      value={value}
    />
  </S.Container>
);

export default Input;
