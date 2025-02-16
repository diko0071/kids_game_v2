import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import { LangList } from "../../constants";

const Speaker: React.FC = () => {
  const { speakerText: text, isSpeaking, lang } = useAppSelector(gameInfoSelector);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const textQueueRef = React.useRef<string[]>([]);
  const lastProcessedText = React.useRef<string | null>(null);

  useEffect(() => {
    if (!text || text === lastProcessedText.current) {
      console.log('Speaker: Empty or duplicate text, skipping');
      return;
    }
    
    if (!textQueueRef.current.includes(text)) {
      console.log('Speaker: Adding to queue:', text);
      textQueueRef.current.push(text);
    } else {
      console.log('Speaker: Text already in queue, skipping:', text);
    }

    if (isSpeaking) {
      console.log('Speaker: Already speaking, current queue:', textQueueRef.current);
      return;
    }

    const speakNext = async () => {
      if (textQueueRef.current.length === 0) {
        console.log('Speaker: Queue empty, nothing to play');
        return;
      }

      const currentText = textQueueRef.current[0];
      console.log('Speaker: Starting to speak:', currentText);
      dispatch(gameInfoActions.setIsSpeaking(true));

      try {
        console.log('Speaker: Sending request to ElevenLabs API');
        const apiKey = process.env.NEXT_PUBLIC_ELEVEN_LABS_API_KEY;
        if (!apiKey) {
          throw new Error("ElevenLabs API key is missing");
        }

        const parts = currentText.split('|');
        if (parts.length < 3) {
          throw new Error("Invalid text format - expected 3 parts");
        }

        const fullText = parts.join(" ");

        const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/vGQNBgLaiM3EdZtxIiuY', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'xi-api-key': apiKey,
          },
          body: JSON.stringify({
            text: fullText,
            model_id: 'eleven_multilingual_v2',
            voice_settings: {
              stability: 0.5,
              similarity_boost: 0.75,
            }
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to generate speech: ${response.statusText}`);
        }

        console.log('Speaker: Got successful response, creating audio');
        const audioBlob = await response.blob();
        const audio = new Audio(URL.createObjectURL(audioBlob));
        
        console.log('Speaker: Starting audio playback');
        await new Promise((resolve) => {
          audio.onended = () => {
            console.log('Speaker: Audio playback completed');
            resolve(void 0);
          };
          audio.play();
        });

      } catch (err) {
        console.error('Speaker: Error during speech generation/playback:', err);
        setError(`Speech error: ${err instanceof Error ? err.message : String(err)}`);
      } finally {
        const removedText = textQueueRef.current.shift();
        lastProcessedText.current = removedText || null;
        console.log('Speaker: Removed from queue:', removedText);
        console.log('Speaker: Remaining queue:', textQueueRef.current);
        dispatch(gameInfoActions.setIsSpeaking(false));
        
        if (textQueueRef.current.length > 0) {
          console.log('Speaker: Starting next item in queue');
          speakNext();
        } else {
          console.log('Speaker: Queue empty, finished playing all items');
        }
      }
    };

    if (!isSpeaking) {
      console.log('Speaker: Starting queue processing');
      speakNext();
    }
  }, [text, isSpeaking, dispatch, lang]);

  return (
    <div style={{ display: 'none' }}>
      {error && (
        <div role="alert" style={{ color: 'red' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default Speaker;
