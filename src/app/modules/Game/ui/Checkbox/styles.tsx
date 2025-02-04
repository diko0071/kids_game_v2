import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${COLORS.blue};
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border: 2px solid ${COLORS.lightBlue};
  border-radius: 4px;
  background-color: ${COLORS.white};
  transition: background-color 0.3s, border-color 0.3s;
  cursor: pointer;

  &:checked {
    background-color: ${COLORS.blue};
    border-color: ${COLORS.blue};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${COLORS.lightBlue};
  }
`;

export default { Container, Label, Checkbox };
