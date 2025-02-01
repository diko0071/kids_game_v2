import React, { useEffect, useState, useCallback } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import * as speechsdk from "microsoft-cognitiveservices-speech-sdk";
import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import { LangList, VoiceList } from "../../constants";

interface QueueItem {
  text: string;
  lang: string;
}

const Speaker: React.FC = () => {
  const {
    speakerText: text,
    speakerLang: lang,
    isSpeaking,
  } = useAppSelector(gameInfoSelector);
  const [error, setError] = useState<string | null>(null);
  const [queue, setQueue] = useState<QueueItem[]>([]);

  const dispatch = useAppDispatch();

  const processQueue = useCallback(async () => {
    if (queue.length === 0 || isSpeaking) return;

    const subscriptionKey = process.env.NEXT_PUBLIC_AZURE_SUBSCRIPTION_KEY;
    if (!subscriptionKey) {
      setError("Azure subscription key is missing");
      return;
    }

    const item = queue[0];
    dispatch(gameInfoActions.setIsSpeaking(true));

    const speechConfig = speechsdk.SpeechConfig.fromSubscription(
      subscriptionKey,
      "eastus"
    );

    speechConfig.speechSynthesisVoiceName =
      item.lang === LangList.ru ? VoiceList.ru : VoiceList.en;

    const synthesizer = new speechsdk.SpeechSynthesizer(speechConfig);

    try {
      const result = await new Promise<speechsdk.SpeechSynthesisResult>(
        (resolve, reject) => {
          synthesizer.speakTextAsync(item.text, resolve, reject);
        }
      );

      if (result.reason === speechsdk.ResultReason.SynthesizingAudioCompleted) {
        console.log("Speech synthesized for text:", item.text);
      } else {
        throw new Error(`Speech synthesis canceled: ${result.errorDetails}`);
      }
    } catch (err) {
      setError(`Error occurred during speech synthesis: ${err}`);
      console.error("Error occurred during speech synthesis:", err);
    } finally {
      synthesizer.close();
      dispatch(gameInfoActions.setIsSpeaking(false));
      setQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [queue, isSpeaking, dispatch]);

  useEffect(() => {
    if (text) {
      setQueue((prevQueue) => [...prevQueue, { text, lang }]);
    }
  }, [text, lang]);

  useEffect(() => {
    processQueue();
  }, [queue, isSpeaking, processQueue]);

  return (
    <div style={{ display: "none" }}>{error && <p>Error: {error}</p>}</div>
  );
};

export default Speaker;
