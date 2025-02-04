import React, { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import GhostGame from "./components/GhostGame";
import { GAME_NAMES, GameList } from "../../constants";
import NumbersGame from "./components/NumbersGame";
import RussianAlphabetGame from "./components/RussianAlphabetGame";
import WordMathingGame from "./components/WordMathingGame";
import SyllableMatchingGame from "./components/SyllableMatchingGame";

import Modal from "../../ui/Modal";
import FigureGame from "./components/FigureGame";

const GAMES = {
  [GameList.ghost]: GhostGame,
  [GameList.numbers]: NumbersGame,
  [GameList.russianAlphabet]: RussianAlphabetGame,
  [GameList.wordMatching]: WordMathingGame,
  [GameList.syllableMatching]: SyllableMatchingGame,
  [GameList.figure]: FigureGame,
};
const GameWrapper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { currentGameTypes, isSpeaking, settings } =
    useAppSelector(gameInfoSelector);
  const dispatch = useAppDispatch();

  const { disableDuringSpeaking } = settings;

  const currentGameType = currentGameTypes[activeIndex];
  const currentGameName =
    GAME_NAMES[currentGameType as keyof typeof GAME_NAMES];

  const GameComponent = GAMES[currentGameType as keyof typeof GAMES];

  const showGame = !!GameComponent;

  const title = `${currentGameName} (Мини-игра ${activeIndex + 1} / ${
    currentGameTypes.length
  })`;

  const onComplete = () => {
    if (activeIndex === currentGameTypes.length - 1) {
      dispatch(gameInfoActions.setGames([]));
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const disabled = isSpeaking && disableDuringSpeaking;

  return (
    <Modal active={showGame} closable={false} title={title} disabled={disabled}>
      {showGame && <GameComponent onComplete={onComplete} key={activeIndex} />}
    </Modal>
  );
};

export default GameWrapper;
