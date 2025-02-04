import { useCallback, useState } from "react";
import { useGameAudio } from "./useGameAudio";
import { useAppDispatch } from "../../../services/hooks";
import { gameInfoActions } from "../services/gameInfo";
import { LangList } from "../constants";

const praises = [
  "Молодец!",
  "Отлично!",
  "Правильно!",
  "Супер!",
  "Ты умница!",
  "Здорово!",
  "Верно!",
  "Ты справилась!",
  "Замечательно!",
  "Так держать!",
];

const englishPraises = [
  "Great job!",
  "Excellent!",
  "Correct!",
  "Super!",
  "You're smart!",
  "Wonderful!",
  "Right!",
  "You did it!",
  "Fantastic!",
  "Keep it up!",
];

export function useGameLogic<T>(
  generateNewQuestion: () => void,
  checkAnswer: (answer: T) => boolean,
  onSuccess: () => void,
  onFailure: () => void,
  language: LangList = LangList.ru
) {
  const dispatch = useAppDispatch();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [message, setMessage] = useState("");
  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms);
    });

  const { playHappySound, playSadSound } = useGameAudio();

  const getRandomPraise = () => {
    const praiseList = language === "ru-RU" ? praises : englishPraises;
    return praiseList[Math.floor(Math.random() * praiseList.length)];
  };

  const handleAnswer = useCallback(
    async (answer: T) => {
      if (checkAnswer(answer)) {
        setIsCorrect(true);
        const praise = getRandomPraise();
        setMessage(praise);
        await playHappySound();
        await sleep(1000);

        dispatch(
          gameInfoActions.setSpeakerText({
            text: praise,
            lang: language,
          })
        );

        onSuccess();
      } else {
        setIsCorrect(false);
        const tryAgainMessage =
          language === "ru-RU" ? "Попробуй ещё раз!" : "Try again!";
        setMessage(tryAgainMessage);
        await playSadSound();
        await sleep(1000);

        dispatch(
          gameInfoActions.setSpeakerText({
            text: tryAgainMessage,
            lang: language,
          })
        );

        onFailure();
      }
    },
    [
      checkAnswer,
      getRandomPraise,
      playHappySound,
      dispatch,
      language,
      onSuccess,
      playSadSound,
      onFailure,
    ]
  );

  const nextQuestion = useCallback(() => {
    generateNewQuestion();
    setIsCorrect(null);
    setMessage("");
  }, [generateNewQuestion]);

  return { isCorrect, message, handleAnswer, nextQuestion };
}
