"use client";

import React from "react";

import dynamic from "next/dynamic";
import S from "./styles";

import Speaker from "./components/Speaker";

import GameWrapper from "./components/GameWrapper";

import ControlPanel from "./components/ControlPanel";

const YoutubePlayer = dynamic(() => import("./components/YoutubePlayer"), {
  ssr: false,
});

const Game = () => (
  <S.Container>
    <S.Wrapper>
      <YoutubePlayer />
      <ControlPanel />
      <Speaker />
      <GameWrapper />
    </S.Wrapper>
  </S.Container>
);

export default Game;
