"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAppDispatch } from "services/hooks";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import { gameInfoActions } from "../../../../services/gameInfo";
import { COLORS, LangList } from "../../../../constants";
import S from "../../styles";
import Button from "../../../../ui/Button";
import { FAMILY_WORDS } from "./constants";

interface WordMatchingGameProps {
  onComplete: () => void;
}

const WordMatchingGame = ({ onComplete }: WordMatchingGameProps) => {
  const [currentWord, setCurrentWord] = useState<typeof FAMILY_WORDS[0] | null>(
    null
  );
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<string[]>([]);
  const isInitialMount = useRef(true);
  const speakTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const speakWord = useCallback(
    async (word: typeof FAMILY_WORDS[0]) => {
      if (!word) return;

      dispatch(
        gameInfoActions.setSpeakerText({
          text: word.russian,
          lang: LangList.ru,
        })
      );

      if (speakTimeoutRef.current) {
        clearTimeout(speakTimeoutRef.current);
      }

      speakTimeoutRef.current = setTimeout(async () => {
        dispatch(
          gameInfoActions.setSpeakerText({
            text: word.english,
            lang: LangList.en,
          })
        );
      }, 500);
    },
    [dispatch]
  );

  const checkAnswer = useCallback(
    (answer: string) => currentWord?.russian === answer,
    [currentWord]
  );

  const { isCorrect, message, handleAnswer } = useGameLogic(
    () => {},
    checkAnswer,
    onComplete,
    () => {}
  );

  const handleWordClick = useCallback(
    (word: string) => {
      if (!isCorrect) {
        handleAnswer(word);
        
        dispatch(
          gameInfoActions.setSpeakerText({
            text: word,
            lang: LangList.ru,
          })
        );
      }
    },
    [handleAnswer, isCorrect, dispatch]
  );

  const initializeGame = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * FAMILY_WORDS.length);
    const selectedWord = FAMILY_WORDS[randomIndex];

    const otherWords = FAMILY_WORDS.filter(
      (word) => word.russian !== selectedWord.russian
    )
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const allOptions = [selectedWord, ...otherWords]
      .map((word) => word.russian)
      .sort(() => Math.random() - 0.5);

    setCurrentWord(selectedWord);
    setOptions(allOptions);
    speakWord(selectedWord);
  }, [speakWord]);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log("[DEBUG] First time initialization");
      isInitialMount.current = false;
      initializeGame();
    }
  }, [initializeGame]);

  useEffect(
    () => () => {
      if (speakTimeoutRef.current) {
        clearTimeout(speakTimeoutRef.current);
      }
    },
    []
  );

  const handleRepeatWord = useCallback(() => {
    if (currentWord) {
      speakWord(currentWord);
    }
  }, [currentWord, speakWord]);

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>
      <S.SVGWrapper>
        <Button
          onClick={handleRepeatWord}
          text={currentWord?.russian || ""}
          backgroundColor={COLORS.darkPink}
          textColor={COLORS.white}
          isHuge
        />
      </S.SVGWrapper>

      <S.Buttons rows={2}>
        {options.map((option) => (
          <Button
            key={option}
            onClick={() => handleWordClick(option)}
            text={option}
            isMedium
          />
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default WordMatchingGame;
