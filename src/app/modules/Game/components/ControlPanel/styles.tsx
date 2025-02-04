import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RangeWrapper = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  gap: 16px;
  align-items: center;
`;

const Label = styled.div`
  text-align: left;
  grid-column-start: 1;
  grid-column-end: 4;
  font-size: 16px;
  color: ${COLORS.blue};
`;

const RangeCount = styled.div`
  color: ${COLORS.blue};
  font-size: 32px;
  line-height: 36px;
  font-weight: 500;
`;
export default {
  Container,
  ModalWrapper,
  Label,
  RangeWrapper,
  RangeCount,
};
