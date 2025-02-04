import styled from "styled-components";
import { COLORS } from "./constants";

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${COLORS.pink};
  min-height: 100vh;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100%;
  padding: 32px;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
  }
`;

export default {
  Container,
  Wrapper,
};
