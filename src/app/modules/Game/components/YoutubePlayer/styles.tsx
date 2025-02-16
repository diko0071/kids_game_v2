import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  z-index: 2;
  width: 100%;
  position: relative;
  margin: 10px auto;
  margin-bottom: 70px;
  display: grid;
  grid-template-columns: 1fr 300px;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  gap: 16px;

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

  @media only screen and (max-width: 1200px) {
    grid-template-columns: 1fr 250px;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 200px;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  background: ${COLORS.white};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  height: auto;
  max-height: calc(100vh - 200px);
  position: sticky;
  top: 10px;
  overflow-y: auto;
  margin-bottom: 16px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkPink};
    border-radius: 4px;
  }
`;

const VideoList = styled.div`
  background: ${COLORS.lightBlue};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  overflow-y: auto;
  max-height: calc(100vh - 220px);

  @media only screen and (max-width: 1200px) {
    max-height: calc(100vh - 220px);
  }

  @media only screen and (max-width: 900px) {
    max-height: calc(100vh - 220px);
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkPink};
    border-radius: 4px;
  }
`;

const CategoryList = styled(VideoList)`
  background: ${COLORS.pink};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.blue};
  }
`;

const VideoCard = styled.div<{
  active: boolean;
}>`
  cursor: ${({ active }) => (active ? "auto" : "pointer")};
  transition: 0.2s all;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 2px;
  border-radius: 4px;
  background: ${COLORS.white};
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 1200px) {
    gap: 1px;
    padding: 2px;
  }

  @media only screen and (max-width: 900px) {
    gap: 1px;
    padding: 1px;
  }
`;

const CategoryCard = styled(VideoCard)``;

const VideoPreview = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 3px;

  @media only screen and (max-width: 1200px) {
    border-radius: 2px;
  }

  @media only screen and (max-width: 900px) {
    border-radius: 2px;
  }
`;

const CategoryPreview = styled(VideoPreview)``;

const VideoName = styled.div<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? COLORS.darkPink : COLORS.gray)};
  font-size: 9px;
  line-height: 1.1;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media only screen and (max-width: 1200px) {
    font-size: 8px;
    -webkit-line-clamp: 2;
  }

  @media only screen and (max-width: 900px) {
    font-size: 7px;
  }
`;

const CategoryName = styled(VideoName)`
  color: ${({ active }) => (active ? COLORS.blue : COLORS.gray)};
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
  MainContent,
  PlayerWrapper,
  SideContent,
  VideoList,
  CategoryList,
  VideoCard,
  CategoryCard,
  VideoPreview,
  CategoryPreview,
  VideoName,
  CategoryName,
  RightControlsOverlay,
  RecommendationsOverlay,
  Footer,
};