import styled from "styled-components";
import { COLORS } from "../../constants";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 10px;
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
  height: calc(100vh - 20px);
  position: sticky;
  top: 10px;
`;

const VideoList = styled.div`
  background: ${COLORS.pink};
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${COLORS.darkPink};
    border-radius: 4px;
  }
`;

const CategoryList = styled(VideoList)`
  background: ${COLORS.lightBlue};

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
  gap: 4px;
  padding: 4px;
  border-radius: 6px;
  background: ${COLORS.white};

  &:hover {
    transform: scale(1.02);
  }
`;

const CategoryCard = styled(VideoCard)``;

const VideoPreview = styled.img`
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 4px;
`;

const CategoryPreview = styled(VideoPreview)``;

const VideoName = styled.div<{
  active: boolean;
}>`
  color: ${({ active }) => (active ? COLORS.darkPink : COLORS.gray)};
  font-size: 11px;
  line-height: 1.2;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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