"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useAppDispatch } from "services/hooks";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import { gameInfoActions } from "../../../../services/gameInfo";
import { LangList } from "../../../../constants";
import { getRandomNumber } from "../../../../utils/getRandomNumber";
import S from "../../styles";
import Button from "../../../../ui/Button";
import {
  CAKE_COLORS,
  CakeSvg,
  ICE_CREAM_COLORS,
  IceCreamSvg,
  NUMBERS,
} from "./constants";

interface NumbersGameProps {
  onComplete: () => void;
}

const NumbersGame = ({ onComplete }: NumbersGameProps) => {
  const [dessertCount, setDessertCount] = useState(2);
  const [options, setOptions] = useState<number[]>([]);
  const [isIceCream, setIsIceCream] = useState(true);

  useEffect(() => {
    setIsIceCream(!!getRandomNumber(0, 1));
  }, []);

  const dispatch = useAppDispatch();

  const speakRussianAndEnglishNumber = useCallback(
    (number: number) => {
      const index = isIceCream ? number - 4 : number + 3;

      const lang = !!getRandomNumber(0, 1) ? LangList.ru : LangList.en;
      const text = NUMBERS[index][lang];
      dispatch(
        gameInfoActions.setSpeakerText({
          text,
          lang,
        })
      );
    },
    [dispatch, isIceCream]
  );

  const generateNewQuestion = useCallback(() => {
    const count = Math.floor(Math.random() * 7) + 4;
    setDessertCount(count);

    const newOptions = [count];
    while (newOptions.length < 3) {
      const option = Math.floor(Math.random() * 7) + 4;
      if (!newOptions.includes(option)) {
        newOptions.push(option);
      }
    }
    setOptions(newOptions.sort(() => Math.random() - 0.5));
  }, []);

  const checkAnswer = useCallback(
    (answer: number) => answer === dessertCount,
    [dessertCount]
  );

  const { isCorrect, message, handleAnswer } = useGameLogic(
    generateNewQuestion,
    checkAnswer,
    onComplete,
    () => {}
  );

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const handleOptionClick = (option: number) => {
    if (!isCorrect) {
      speakRussianAndEnglishNumber(option);
      handleAnswer(option);
    }
  };

  const DessertComponent = isIceCream ? IceCreamSvg : CakeSvg;
  const dessertColors = isIceCream ? ICE_CREAM_COLORS : CAKE_COLORS;

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>
      <div className="flex flex-col gap-8 mb-12 mt-12">
        <div className="flex justify-center gap-12">
          {Array.from({ length: Math.min(5, dessertCount) }).map((_, index) => (
            <DessertComponent
              key={`row1-${index}`}
              colors={[
                dessertColors[index % dessertColors.length],
                dessertColors[(index + 1) % dessertColors.length],
              ]}
            />
          ))}
        </div>
        {dessertCount > 5 && (
          <div className="flex justify-center gap-12">
            {Array.from({ length: dessertCount - 5 }).map((_, index) => (
              <DessertComponent
                key={`row2-${index}`}
                colors={[
                  dessertColors[(index + 5) % dessertColors.length],
                  dessertColors[(index + 6) % dessertColors.length],
                ]}
              />
            ))}
          </div>
        )}
      </div>
      <S.Buttons>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleOptionClick(option)}
            text={option.toString()}
            isMedium
          />
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default NumbersGame;
