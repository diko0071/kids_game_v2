"use client";

import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

import { useSearchParams, useRouter } from "next/navigation";
import S from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import { GameList, VIDEO_CATEGORIES, VIDEOS } from "../../constants";
import { getRandomGames } from "../../utils/getRandomGames";

const YoutubePlayer: React.FC = () => {
  const [canStartExercises, setCanStartExercises] = useState<boolean>(true);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("favorite_dances");
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    playlistId,
    videoId,
    settings,
    currentGameTypes,
    isSpecialExercises,
  } = useAppSelector(gameInfoSelector);

  const { showYoutubeControls, showFrequency } = settings;

  const queryPlaylistId = searchParams.get("playlistId");
  const queryVideoId = searchParams.get("videoId");

  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoId && !playlistId) {
      dispatch(
        gameInfoActions.setVideoId({
          videoId: queryVideoId || VIDEOS[0].id,
          playlistId: queryPlaylistId || null,
        })
      );
    }
  }, [dispatch, playlistId, queryPlaylistId, queryVideoId, videoId]);

  useEffect(() => {
    const activeVideoIndex = VIDEOS.findIndex((video) => video.id === videoId);
    if (activeVideoIndex !== -1 && videoRefs.current[activeVideoIndex]) {
      videoRefs.current[activeVideoIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [videoId]);

  useEffect(() => {
    if (!playerRef.current) return;

    if (currentGameTypes.length > 0) {
      playerRef.current.pauseVideo?.();
      setIsTimerActive(false);
    } else {
      playerRef.current.playVideo?.();
      setTimeout(() => {
        setCanStartExercises(true);
        setStartTime(Date.now());
        setIsTimerActive(true);
      }, 5000);
    }
  }, [currentGameTypes]);

  useEffect(() => {
    if (!isTimerActive) return;

    const interval = setInterval(() => {
      const currentTime = Math.floor((Date.now() - startTime) / 1000);

      if (
        currentTime % (showFrequency * 60) === 0 &&
        currentTime !== 0 &&
        !currentGameTypes?.length &&
        canStartExercises
      ) {
        const randomGames = getRandomGames(settings).map((key) => {
          if (key === GameList.syllableMatching) {
            return GameList.numbers;
          }
          return key;
        });
        dispatch(gameInfoActions.setGames(randomGames));
        dispatch(gameInfoActions.setIsSpecialExercises(false));
        setCanStartExercises(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentGameTypes.length, dispatch, canStartExercises, settings, showFrequency, startTime, isTimerActive]);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: showYoutubeControls ? 1 : 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 0,
      rel: 0,
    },
  };

  const handlePlayerReady = (event: any) => {
    playerRef.current = event.target;
    console.log("Player is ready:", event.target);
  };

  const handlePlayerError = (event: any) => {
    console.error("Error in YouTube Player:", event.data);
  };

  return (
    <S.Container>
      <S.MainContent>
        <S.PlayerWrapper>
          {playlistId ? (
            <>
              <YouTube
                key={playlistId}
                videoId={playlistId}
                opts={{
                  ...opts,
                  playerVars: {
                    ...opts.playerVars,
                    listType: "playlist",
                    list: playlistId,
                  },
                }}
                onReady={handlePlayerReady}
                onError={handlePlayerError}
              />
              <S.TitleOverlay />
              <S.RightControlsOverlay />
              <S.RecommendationsOverlay />
            </>
          ) : (
            <>
              <YouTube
                key={videoId}
                videoId={videoId}
                opts={opts}
                onReady={handlePlayerReady}
                onError={handlePlayerError}
              />
              <S.TitleOverlay />
              <S.RightControlsOverlay />
              <S.RecommendationsOverlay />
            </>
          )}
        </S.PlayerWrapper>
      </S.MainContent>

      <S.SideContent>
        <S.VideoList>
          {(() => {
            const selectedCategoryData = VIDEO_CATEGORIES.find(cat => cat.id === selectedCategory);
            if (!selectedCategoryData) return null;
            
            // Filter out duplicates using Set
            const uniqueVideos = selectedCategoryData.videos.reduce((acc, video) => {
              if (!acc.some(v => v.id === video.id)) {
                acc.push(video);
              }
              return acc;
            }, [] as Array<{id: string, name: string}>);
            
            return uniqueVideos.map(({ id, name }) => {
              const previewSrc = `https://img.youtube.com/vi/${id}/0.jpg`;
              const active = videoId === id;

              return (
                <S.VideoCard
                  key={`${selectedCategory}_${id}`}
                  active={active}
                  onClick={() => {
                    if (!active) {
                      dispatch(gameInfoActions.setVideoId({ videoId: id }));
                      const newParams = new URLSearchParams(searchParams.toString());
                      newParams.set("videoId", id);
                      router.replace(`?${newParams.toString()}`);
                    }
                  }}
                >
                  <S.VideoPreview src={previewSrc} alt={name} />
                  <S.VideoName active={active}>{name}</S.VideoName>
                </S.VideoCard>
              );
            });
          })()}
        </S.VideoList>

        <S.CategoryList>
          {VIDEO_CATEGORIES.map((category) => (
            <S.CategoryCard
              key={`category_${category.id}`}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              <S.CategoryPreview src={category.image} alt={category.name} />
              <S.CategoryName active={selectedCategory === category.id}>
                {category.name}
              </S.CategoryName>
            </S.CategoryCard>
          ))}
        </S.CategoryList>
      </S.SideContent>

      <S.Footer>
        <a href="https://github.com/diko0071/kids_game_v2" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </S.Footer>
    </S.Container>
  );
};

export default YoutubePlayer;
