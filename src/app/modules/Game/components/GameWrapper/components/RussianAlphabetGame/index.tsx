"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useAppDispatch } from "services/hooks";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import { gameInfoActions } from "../../../../services/gameInfo";
import S from "../../styles";
import Button from "../../../../ui/Button";
import {
  RUSSIAN_LETTERS,
  RussianLetterSvg,
  RUSSIAN_WORDS,
  LETTER_COLORS,
} from "./constants";
import { LangList } from "../../../../constants";
import { useDispatch } from 'react-redux';

interface RussianAlphabetGameProps {
  onComplete: () => void;
}

const RussianAlphabetGame = ({ onComplete }: RussianAlphabetGameProps) => {
  const [currentLetter, setCurrentLetter] = useState(RUSSIAN_LETTERS[0]);
  const [options, setOptions] = useState<string[]>([]);
  const dispatch = useDispatch();

  const generateNewQuestion = useCallback(() => {
    const letter =
      RUSSIAN_LETTERS[Math.floor(Math.random() * RUSSIAN_LETTERS.length)];
    setCurrentLetter(letter);

    const newOptions = [letter];
    while (newOptions.length < 3) {
      const option =
        RUSSIAN_LETTERS[Math.floor(Math.random() * RUSSIAN_LETTERS.length)];
      if (!newOptions.includes(option)) {
        newOptions.push(option);
      }
    }
    setOptions(newOptions.sort(() => Math.random() - 0.5));
  }, []);

  const checkAnswer = useCallback(
    (answer: string) => answer === currentLetter,
    [currentLetter]
  );

  const getLetterText = useCallback((letter: string) => {
    const words = RUSSIAN_WORDS[letter as keyof typeof RUSSIAN_WORDS];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return `${letter}. ${randomWord.russian}|${randomWord.english}`;
  }, []);

  const speakRussianAndEnglishWord = useCallback(
    (letter: string) => {
      const words = RUSSIAN_WORDS[letter as keyof typeof RUSSIAN_WORDS];
      const randomWord = words[Math.floor(Math.random() * words.length)];
      
      dispatch(
        gameInfoActions.setSpeakerText({
          text: `${letter}. ${randomWord.russian}|${randomWord.english}`,
          lang: LangList.ru,
        })
      );
    },
    [dispatch]
  );

  const { isCorrect, message, handleAnswer } = useGameLogic(
    generateNewQuestion,
    checkAnswer,
    onComplete,
    () => {},
    LangList.ru,
    getLetterText(currentLetter)
  );

  useEffect(() => {
    generateNewQuestion();
  }, [generateNewQuestion]);

  const handleLetterClick = (letter: string) => {
    if (!isCorrect) {
      speakRussianAndEnglishWord(letter);
      handleAnswer(letter);
    }
  };

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>

      <S.SVGWrapper>
        <RussianLetterSvg
          letter={currentLetter}
          color={LETTER_COLORS[RUSSIAN_LETTERS.indexOf(currentLetter)]}
        />
      </S.SVGWrapper>
      <S.Buttons>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleLetterClick(option)}
            text={option}
            isMedium
          />
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default RussianAlphabetGame;
