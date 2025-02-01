import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 16px;
  color: ${COLORS.blue};
  padding-left: 14px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid ${COLORS.lightBlue};
  border-radius: 12px;
  background-color: #ffffff;
  color: ${COLORS.gray};
  transition: background-color 0.3s, border-color 0.3s;
  width: 100%;

  &:focus {
    outline: none;
    background-color: ${COLORS.lightBlue};
    border-color: ${COLORS.blue};
  }

  &::placeholder {
    color: ${COLORS.lightGray};
    font-style: italic;
  }
`;

export default { Container, Label, Input };
