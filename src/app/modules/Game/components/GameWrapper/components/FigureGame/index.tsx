"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import { gameInfoActions } from "../../../../services/gameInfo";
import { useAppDispatch } from "../../../../../../services/hooks";
import S from "../../styles";

import { LangList } from "../../../../constants";
import { getRandomNumber } from "../../../../utils/getRandomNumber";
import { getRandomUniqueItems } from "../../../../utils/getRandomUniqueItems";
import { FIGURES, FIGURE_COLORS, FIGURE_WORDS, IMAGES } from "./constants";

interface FigureGameProps {
  onComplete: () => void;
}

const FigureGame = ({ onComplete }: FigureGameProps) => {
  const [currentFigure, setCurrentFigure] = useState<{
    name: string;
    color: string;
  }>({ name: "", color: "" });
  const [options, setOptions] = useState<{ name: string; color: string }[]>([]);
  const dispatch = useAppDispatch();

  const generateNewQuestion = useCallback(() => {
    const newFigureOptions = getRandomUniqueItems(FIGURES, 3);

    const newColorOptions = getRandomUniqueItems(FIGURE_COLORS, 3);

    const newOptions = newFigureOptions.map((figureOption, index) => ({
      name: figureOption,
      color: newColorOptions[index],
    }));

    const randomFigure = newOptions[getRandomNumber(0, newOptions.length - 1)];

    setCurrentFigure(randomFigure);
    setOptions(newOptions);
  }, []);

  const checkAnswer = useCallback(
    (answer: string) => answer === currentFigure.name,
    [currentFigure]
  );

  const speakRussianAndEnglishWord = useCallback(
    (figure: string) => {
      const word = FIGURE_WORDS[figure as keyof typeof FIGURE_WORDS];
      if (!word) return;
      
      dispatch(
        gameInfoActions.setSpeakerText({
          text: `${word.ru}|${word.en}`,
          lang: LangList.ru,
        })
      );
    },
    [dispatch]
  );

  const getFigureText = useCallback((figure: string) => {
    const word = FIGURE_WORDS[figure as keyof typeof FIGURE_WORDS];
    return word ? `${word.ru}|${word.en}` : '';
  }, []);

  const { isCorrect, message, handleAnswer } = useGameLogic(
    generateNewQuestion,
    checkAnswer,
    onComplete,
    () => {},
    LangList.ru,
    getFigureText(currentFigure.name)
  );

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const handleFigureClick = (figure: string) => {
    if (!isCorrect) {
      speakRussianAndEnglishWord(figure);
      handleAnswer(figure);
    }
  };

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>

      <S.SVGWrapper>
        <S.FigureWrapper color={currentFigure.color} isParent>
          {IMAGES[currentFigure.name as keyof typeof IMAGES]}
        </S.FigureWrapper>
      </S.SVGWrapper>
      <S.Buttons>
        {options.map((option) => (
          <S.FigureWrapper
            onClick={() => handleFigureClick(option.name)}
            color={option.color}
          >
            {IMAGES[option.name as keyof typeof IMAGES]}
          </S.FigureWrapper>
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default FigureGame;
