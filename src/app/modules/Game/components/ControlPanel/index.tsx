import React, { useEffect, useState } from "react";
import S from "./styles";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Input from "../../ui/Input";
import { IconTypes } from "../../ui/Icon";
import {
  COLORS,
  DEFAULT_SETTINGS,
  GAME_NAMES,
  MAX_EXERCISE_COUNT,
  MAX_SHOW_FREQUENCY,
  MIN_EXERCISE_COUNT,
  MIN_SHOW_FREQUENCY,
  SETTINGS_LOCAL_STORAGE_KEY,
} from "../../constants";
import { useAppDispatch, useAppSelector } from "../../../../services/hooks";
import { gameInfoActions, gameInfoSelector } from "../../services/gameInfo";
import Checkbox from "../../ui/Checkbox";
import { getVideoId } from "../../utils/getVideoId";
import { getRandomGames } from "../../utils/getRandomGames";

const ControlPanel: React.FC = () => {
  const [currentSettings, setCurrentSettings] = useState(DEFAULT_SETTINGS);
  const [settingModalActive, setSettingsModalActive] = useState<boolean>(false);
  const [contentModalActive, setContentModalActive] = useState<boolean>(false);
  const [videoUrlValue, setVideoUrlValue] = useState<string>("");
  const [videoIdValue, setVideoIdValue] = useState<string>("");

  const { settings } = useAppSelector(gameInfoSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedSettings = localStorage.getItem(SETTINGS_LOCAL_STORAGE_KEY);
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      dispatch(gameInfoActions.setSettings(parsedSettings));
    }
  }, [dispatch]);

  useEffect(() => {
    if (!settingModalActive) {
      setCurrentSettings(settings);
    }
  }, [settings, settingModalActive]);

  const onSingleSettingChange = (settingKey: string, value: any) => {
    const newSettings = { ...currentSettings, [settingKey]: value };
    setCurrentSettings(newSettings);
  };

  const saveSettings = () => {
    localStorage.setItem(
      SETTINGS_LOCAL_STORAGE_KEY,
      JSON.stringify(currentSettings)
    );

    dispatch(gameInfoActions.setSettings(currentSettings));
    setSettingsModalActive(false);
  };

  return (
    <S.Container>
      <Button
        text="Start Exercises"
        onClick={() => {
          const randomGames = getRandomGames(settings);
          dispatch(gameInfoActions.setGames(randomGames));
          dispatch(gameInfoActions.setIsSpecialExercises(true));
        }}
        textColor={COLORS.white}
        backgroundColor={COLORS.green}
        iconName={IconTypes.play}
      />
      <Button
        text="Settings"
        onClick={() => setSettingsModalActive(true)}
        textColor={COLORS.white}
        backgroundColor={COLORS.orange}
        iconName={IconTypes.setting}
      />
      <Button
        text="Content"
        onClick={() => {
          setContentModalActive(true);
        }}
        textColor={COLORS.white}
        backgroundColor={COLORS.red}
        iconName={IconTypes.camera}
      />
      <Modal
        active={settingModalActive}
        closable
        onClose={() => setSettingsModalActive(false)}
        title="Settings"
      >
        <S.ModalWrapper>
          <S.RangeWrapper>
            <S.Label>Количество упражнений</S.Label>
            <Button
              text="-"
              onClick={() => {
                if (currentSettings.exerciseCount > MIN_EXERCISE_COUNT) {
                  onSingleSettingChange(
                    "exerciseCount",
                    currentSettings.exerciseCount - 1
                  );
                }
              }}
            />
            <S.RangeCount>{currentSettings.exerciseCount}</S.RangeCount>
            <Button
              text="+"
              onClick={() => {
                if (currentSettings.exerciseCount < MAX_EXERCISE_COUNT) {
                  onSingleSettingChange(
                    "exerciseCount",
                    currentSettings.exerciseCount + 1
                  );
                }
              }}
            />
          </S.RangeWrapper>
          <S.RangeWrapper>
            <S.Label>Частота показа (минуты)</S.Label>
            <Button
              text="-"
              onClick={() => {
                if (currentSettings.showFrequency > MIN_SHOW_FREQUENCY) {
                  onSingleSettingChange(
                    "showFrequency",
                    currentSettings.showFrequency - 1
                  );
                }
              }}
            />
            <S.RangeCount>{currentSettings.showFrequency}</S.RangeCount>
            <Button
              text="+"
              onClick={() => {
                if (currentSettings.showFrequency < MAX_SHOW_FREQUENCY) {
                  onSingleSettingChange(
                    "showFrequency",
                    currentSettings.showFrequency + 1
                  );
                }
              }}
            />
          </S.RangeWrapper>
          <Checkbox
            checked={currentSettings.showYoutubeControls}
            onChange={() => {
              onSingleSettingChange(
                "showYoutubeControls",
                !currentSettings.showYoutubeControls
              );
            }}
            label="Показывать управление YouTube"
            key="showYoutubeControls"
          />

          <Checkbox
            checked={currentSettings.disableDuringSpeaking}
            onChange={() => {
              onSingleSettingChange(
                "disableDuringSpeaking",
                !currentSettings.disableDuringSpeaking
              );
            }}
            label="Блокировать игру во время произношения"
            key="disableDuringSpeaking"
          />
          <S.Label>Доступные игры</S.Label>
          {Object.keys(GAME_NAMES).map((key) => {
            const label = GAME_NAMES[key as keyof typeof GAME_NAMES];
            const active =
              currentSettings.availableGames[
                key as keyof typeof currentSettings.availableGames
              ];

            const onCheckboxChange = () => {
              const newSettings = {
                ...currentSettings,
                availableGames: {
                  ...currentSettings.availableGames,
                  [key]: !active,
                },
              };
              setCurrentSettings(newSettings);
            };

            return (
              <Checkbox
                checked={active}
                onChange={onCheckboxChange}
                label={label}
                key={key}
              />
            );
          })}
          <Button text="Save Settings" onClick={saveSettings} />
        </S.ModalWrapper>
      </Modal>

      <Modal
        active={contentModalActive}
        closable
        onClose={() => setContentModalActive(false)}
        title="Content URLs"
      >
        <S.ModalWrapper>
          <Input
            placeholder="https://www.youtube.com/watch?v="
            value={videoUrlValue}
            onChange={(value: string) => setVideoUrlValue(value)}
            label="Video Url"
          />
          <Input
            placeholder="fT-ciS7dk-U"
            value={videoIdValue}
            onChange={(value: string) => setVideoIdValue(value)}
            label="Video ID (optional)"
          />
          <Button
            text="Save Content"
            onClick={() => {
              const newVideoId = videoIdValue || getVideoId(videoUrlValue);

              if (newVideoId) {
                dispatch(gameInfoActions.setVideoId({ videoId: newVideoId }));
                setContentModalActive(false);
              }
            }}
          />
        </S.ModalWrapper>
      </Modal>
    </S.Container>
  );
};

export default ControlPanel;
