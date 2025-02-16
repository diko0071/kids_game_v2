"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useGameLogic } from "../../../../hooks/useGameLogic";
import { gameInfoActions } from "../../../../services/gameInfo";
import { COLORS, LangList } from "../../../../constants";
import { useAppDispatch } from "../../../../../../services/hooks";
import S from "../../styles";
import Button from "../../../../ui/Button";
import { getRandomNumber } from "../../../../utils/getRandomNumber";
import { splitIntoSyllables } from "../../../../utils/splitIntoSyllables";
import { FAMILY_WORDS } from "./constants";

interface SyllableMatchingGameProps {
  onComplete: () => void;
}

const SyllableMatchingGame = ({ onComplete }: SyllableMatchingGameProps) => {
  const [currentWord, setCurrentWord] = useState<(typeof FAMILY_WORDS)[0] | null>(null);
  const dispatch = useAppDispatch();
  const [options, setOptions] = useState<{
    firstSyllables: string[];
    remainingParts: string[];
  }>({ firstSyllables: [], remainingParts: [] });
  const [selectedFirstSyllable, setSelectedFirstSyllable] =
    useState<string>("");
  const [selectedRemainingPart, setSelectedRemainingPart] =
    useState<string>("");
  const { firstSyllables, remainingParts } = options;

  const isInitialMount = useRef(true);

  const checkAnswer = useCallback(
    (answer: string) => currentWord?.ru === answer,
    [currentWord]
  );

  const speakRussianAndEnglishWord = useCallback(
    (word: string) => {
      const wordObj = FAMILY_WORDS.find(w => w.ru === word);
      if (!wordObj) return;
      
      dispatch(
        gameInfoActions.setSpeakerText({
          text: `${wordObj.ru}|${wordObj.en}`,
          lang: LangList.ru,
        })
      );
    },
    [dispatch]
  );

  const getWordText = useCallback((word: string) => {
    const wordObj = FAMILY_WORDS.find(w => w.ru === word);
    return wordObj ? `${wordObj.ru}|${wordObj.en}` : '';
  }, []);

  const { isCorrect, message, handleAnswer } = useGameLogic(
    () => {},
    checkAnswer,
    onComplete,
    () => {},
    LangList.ru,
    currentWord ? getWordText(currentWord.ru) : ''
  );

  const initializeGame = useCallback(() => {
    const randomIndex = getRandomNumber(0, FAMILY_WORDS.length - 1);
    const selectedWord = FAMILY_WORDS[randomIndex];

    const syllables = FAMILY_WORDS.map((word) => splitIntoSyllables(word.ru));

    let newFirstSyllables = syllables.map((parts) => parts[0]);
    let newRemainingParts = syllables.map((parts) => parts.slice(1).join(""));

    newFirstSyllables = newFirstSyllables.sort(() => Math.random() - 0.5);
    newRemainingParts = newRemainingParts.sort(() => Math.random() - 0.5);

    setCurrentWord(selectedWord);
    setOptions({
      firstSyllables: newFirstSyllables,
      remainingParts: newRemainingParts,
    });

    speakRussianAndEnglishWord(selectedWord.ru);
  }, [dispatch, speakRussianAndEnglishWord]);

  useEffect(() => {
    if (isInitialMount.current) {
      console.log("[DEBUG] First time initialization");
      isInitialMount.current = false;
      initializeGame();
    }
  }, [initializeGame]);

  useEffect(() => {
    if (
      selectedFirstSyllable &&
      selectedRemainingPart &&
      handleAnswer &&
      !isCorrect
    ) {
      handleAnswer(selectedFirstSyllable + selectedRemainingPart).then();
    }
  }, [selectedFirstSyllable, selectedRemainingPart]);

  const handleRepeatWord = useCallback(() => {
    if (currentWord) {
      speakRussianAndEnglishWord(currentWord.ru);
    }
  }, [currentWord, speakRussianAndEnglishWord]);

  return (
    <S.Container>
      <S.MessageWrapper>
        {message && <S.Message isCorrect={!!isCorrect}>{message}</S.Message>}
      </S.MessageWrapper>
      <S.SVGWrapper>
        <Button
          onClick={handleRepeatWord}
          text={currentWord?.ru || ""}
          backgroundColor={COLORS.darkPink}
          textColor={COLORS.white}
          isHuge
        />
      </S.SVGWrapper>

      <S.Buttons rows={2}>
        <S.Buttons rows={1}>
          {firstSyllables.map((option) => (
            <Button
              key={option}
              text={option}
              backgroundColor={COLORS.green}
              textColor={COLORS.white}
              isMedium
              isSelected={option === selectedFirstSyllable}
              onClick={() => {
                if (currentWord?.ru.includes(option)) {
                  setSelectedFirstSyllable(option);
                  dispatch(
                    gameInfoActions.setSpeakerText({
                      text: option,
                      lang: LangList.ru,
                    })
                  );
                } else {
                  handleAnswer(option);
                }
              }}
            />
          ))}
        </S.Buttons>
        <S.Buttons rows={1}>
          {remainingParts.map((option) => (
            <Button
              key={option}
              text={option}
              backgroundColor={COLORS.orange}
              textColor={COLORS.white}
              isMedium
              isSelected={option === selectedRemainingPart}
              onClick={() => {
                if (currentWord?.ru.includes(option)) {
                  setSelectedRemainingPart(option);
                  dispatch(
                    gameInfoActions.setSpeakerText({
                      text: option,
                      lang: LangList.ru,
                    })
                  );
                } else {
                  handleAnswer(option);
                }
              }}
            />
          ))}
        </S.Buttons>
      </S.Buttons>
    </S.Container>
  );
};

export default SyllableMatchingGame;
