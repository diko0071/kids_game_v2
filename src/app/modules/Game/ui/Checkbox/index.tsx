import React from "react";
import S from "./styles";

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => (
  <S.Container>
    <S.Checkbox
      type="checkbox"
      checked={checked}
      onChange={({ target: { checked: newChecked } }) => onChange(newChecked)}
    />
    {label && <S.Label onClick={() => onChange(!checked)}>{label}</S.Label>}
  </S.Container>
);

export default Checkbox;
