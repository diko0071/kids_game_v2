"use client";

import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";

import { useSearchParams, useRouter } from "next/navigation";
import S from "./styles";
import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import { GameList, VIDEOS } from "../../constants";
import { getRandomGames } from "../../utils/getRandomGames";

const setFullscreen = (playerRef: any) => {
  const playerElement = playerRef.current.getIframe();
  if (playerElement.requestFullscreen) {
    playerElement.requestFullscreen();
  } else if (playerElement.mozRequestFullScreen) {
    playerElement.mozRequestFullScreen();
  } else if (playerElement.webkitRequestFullscreen) {
    playerElement.webkitRequestFullscreen();
  } else if (playerElement.msRequestFullscreen) {
    playerElement.msRequestFullscreen();
  }
};

const exitFullscreen = () => {
  if (!document.fullscreenElement) return;
  const screen: any = document;
  if (screen.exitFullscreen) {
    screen.exitFullscreen();
  } else if (screen.mozCancelFullScreen) {
    screen.mozCancelFullScreen();
  } else if (screen.webkitExitFullscreen) {
    screen.webkitExitFullscreen();
  } else if (screen.msExitFullscreen) {
    screen.msExitFullscreen();
  }
};

const YoutubePlayer: React.FC = () => {
  const [canStartExercises, setCanStartExercises] = useState<boolean>(true);
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
      exitFullscreen();
    } else if (!isSpecialExercises) {
      playerRef.current.playVideo?.();
      setFullscreen(playerRef);
      setTimeout(() => {
        setCanStartExercises(true);
      }, 5000);
    }
  }, [currentGameTypes, isSpecialExercises]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = Math.floor(playerRef.current.getCurrentTime());

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
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    currentGameTypes.length,
    dispatch,
    canStartExercises,
    settings,
    showFrequency,
  ]);

  const opts = {
    playerVars: {
      autoplay: 1,
      controls: showYoutubeControls ? 1 : 0,
      modestbranding: 1,
      disablekb: 1,
      fs: 1,
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
      <S.PlayerWrapper>
        {playlistId ? (
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
        ) : (
          <YouTube
            key={videoId}
            videoId={videoId}
            opts={opts}
            onReady={handlePlayerReady}
            onError={handlePlayerError}
          />
        )}
      </S.PlayerWrapper>
      <S.VideoList>
        {VIDEOS.map(({ id, name }, index) => {
          const previewSrc = `https://img.youtube.com/vi/${id}/0.jpg`;
          const active = videoId === id;

          return (
            <S.VideoCard
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              active={active}
              key={`card_${id}`}
              onClick={() => {
                if (!active) {
                  const newParams = new URLSearchParams(searchParams);
                  newParams.set("videoId", id);
                  router.replace(`?${newParams.toString()}`);
                  dispatch(gameInfoActions.setVideoId({ videoId: id }));
                }
              }}
            >
              <S.VideoPreview src={previewSrc} />
              <S.VideoName active={active}>{name}</S.VideoName>
            </S.VideoCard>
          );
        })}
      </S.VideoList>
    </S.Container>
  );
};

export default YoutubePlayer;
