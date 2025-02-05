import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  z-index: 2;
  width: 100%;
  position: relative;
  margin: 60px auto;
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: center;
  justify-content: flex-start;
  font-size: 24px;
  font-family: "Roboto", sans-serif;

  &:after,
  &:before {
    mix-blend-mode: multiply;
    filter: none;
    z-index: -1;
    content: "";
    width: calc(100% + 90px);
    height: calc(100% + 90px);
    position: absolute;
    left: -45px;
    animation: anim-ramka-7 8s ease-in-out infinite;
  }
  @keyframes anim-ramka-7 {
    0%,
    100% {
      clip-path: polygon(
        0 0,
        calc(100% - (33px)) calc(0% + (33px)),
        100% 100%,
        calc(0% + (33px)) calc(100% - (33px))
      );
    }
    50% {
      clip-path: polygon(
        calc(0% + (33px)) calc(0% + (33px)),
        100% 0,
        calc(100% - (33px)) calc(100% - (33px)),
        0 100%
      );
    }
  }
  &:after {
    animation-delay: -5s;
    background-color: ${COLORS.lightBlue};
    clip-path: polygon(
      0 0,
      calc(100% - (33px)) calc(0% + (33px)),
      100% 100%,
      calc(0% + (33px)) calc(100% - (33px))
    );
  }
  &:before {
    background-color: ${COLORS.blue};
    clip-path: polygon(
      calc(0% + (33px)) calc(0% + (33px)),
      100% 0,
      calc(100% - (33px)) calc(100% - (33px)),
      0 100%
    );
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    margin: 48px auto;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 10px 0 0 10px;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    border-radius: 10px 10px 0 0;
  }
`;

const VideoList = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  max-width: 300px;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: ${COLORS.pink};
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 12px 0;

  &::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.pink};
    border-radius: 50px;
    border: 2px solid ${COLORS.white};
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease-in-out;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${COLORS.darkPink};
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    padding: 2px;
  }

  @media only screen and (max-width: 900px) {
    position: static;
    flex-direction: row;
    width: 100%;
    max-width: 100%;
    border-radius: 0 0 10px 10px;
    overflow-x: auto;
    overflow-y: hidden;
    padding-right: 16px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const VideoCard = styled.div<{
  active: boolean;
}>`
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: ${({ active }) => (active ? "auto" : "pointer")};
  padding-left: 12px;
  transition: 0.3s all;

  &:hover {
    transform: scale(1.05);
  }
`;

const VideoPreview = styled.img`
  width: 300px;
  height: 168px;
  object-fit: cover;

  @media only screen and (max-width: 900px) {
    width: 160px;
    height: 100px;
  }
`;
const VideoName = styled.div<{
  active: boolean;
}>`
  padding: 8px;
  color: ${({ active }) => (active ? COLORS.darkPink : COLORS.gray)};
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  transition: 0.3s all ease;

  @media only screen and (max-width: 900px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

const RightControlsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  right: 48px;
  width: 200px;
  height: 100px;
  background: rgba(255, 0, 0, 0);
  z-index: 10;

  @media only screen and (max-width: 900px) {
    width: 70px;
    height: 50px;
    right: 48px;
  }
`;

const RecommendationsOverlay = styled.div`
  position: absolute;
  bottom: 60px;
  left: 0;
  width: 100%;
  height: 200px;
  background: rgba(0, 0, 255, 0);
  z-index: 10;

  @media only screen and (max-width: 900px) {
    height: 100px;
    bottom: 70px;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: #666;
  font-size: 14px;
  text-align: center;
  display: flex;
  gap: 8px;
  
  a {
    color: #666;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    color: #666;
  }
`;

export default {
  Container,
  PlayerWrapper,
  VideoList,
  VideoCard,
  VideoPreview,
  VideoName,
  RightControlsOverlay,
  RecommendationsOverlay,
  Footer,
};
