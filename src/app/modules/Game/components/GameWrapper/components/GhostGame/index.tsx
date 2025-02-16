"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useAppDispatch } from "../../../../../../services/hooks";
import { gameInfoActions } from "../../../../services/gameInfo";
import { LangList } from "../../../../constants";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import Button from "../../../../ui/Button";
import S from "../../styles";
import { GHOST_COLORS, GHOST_LIST } from "./constants";
import { getRandomNumber } from "../../../../utils/getRandomNumber";

interface GhostGameProps {
  onComplete: () => void;
}

const GhostGame = ({ onComplete }: GhostGameProps) => {
  const [currentColor, setCurrentColor] = useState<{
    color: string;
    [LangList.ru]: string;
    [LangList.en]: string;
  }>({ color: "", [LangList.ru]: "", [LangList.en]: "" });
  const [options, setOptions] = useState<
    { color: string; [LangList.ru]: string; [LangList.en]: string }[]
  >([]);

  const [ghostSvgNumber, setGhostSvgNumber] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  const generateNewQuestion = useCallback(() => {
    const color = GHOST_COLORS[Math.floor(Math.random() * GHOST_COLORS.length)];
    setCurrentColor(color);

    const newOptions = [color];
    while (newOptions.length < 3) {
      const option =
        GHOST_COLORS[Math.floor(Math.random() * GHOST_COLORS.length)];
      if (!newOptions.find((o) => o.color === option.color)) {
        newOptions.push(option);
      }
    }
    setOptions(newOptions.sort(() => Math.random() - 0.5));
    setGhostSvgNumber(getRandomNumber(1, 6));
  }, []);

  const checkAnswer = useCallback(
    (answer: { color: string; [LangList.ru]: string; [LangList.en]: string }) =>
      answer.color === currentColor.color,
    [currentColor]
  );

  const announceColor = useCallback(
    (color: { [LangList.ru]: string; [LangList.en]: string }) => {
      const russianText = color[LangList.ru];
      const englishText = color[LangList.en];
      
      dispatch(
        gameInfoActions.setSpeakerText({
          text: `${russianText}|${englishText}`,
          lang: LangList.ru,
        })
      );
    },
    [dispatch]
  );

  const getColorText = useCallback(
    (color: { [LangList.ru]: string; [LangList.en]: string }) => {
      const russianText = color[LangList.ru];
      const englishText = color[LangList.en];
      return `${russianText}|${englishText}`;
    },
    []
  );

  const { isCorrect, message, handleAnswer } = useGameLogic(
    generateNewQuestion,
    checkAnswer,
    onComplete,
    () => {},
    LangList.ru,
    getColorText(currentColor)
  );

  const handleColorClick = useCallback(
    (option: {
      color: string;
      [LangList.ru]: string;
      [LangList.en]: string;
    }) => {
      if (!isCorrect) {
        announceColor(option);
        handleAnswer(option);
      }
    },
    [announceColor, handleAnswer]
  );

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const ghostSvg =
    GHOST_LIST[`ghost_${ghostSvgNumber}` as keyof typeof GHOST_LIST];

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>
      <S.SVGWrapper currentColor={currentColor.color}>{ghostSvg}</S.SVGWrapper>
      <S.Buttons>
        {options.map((option) => (
          <Button
            key={option.color}
            onClick={() => handleColorClick(option)}
            backgroundColor={option.color}
            text=""
            isMedium
          />
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default GhostGame;
