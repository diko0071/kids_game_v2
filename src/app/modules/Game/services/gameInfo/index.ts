import { createSlice } from "@reduxjs/toolkit";

import { AppState } from "services/store";
import { DEFAULT_SETTINGS, LangList } from "../../constants";

interface GameInfoState {
  videoId: unknown;
  playlistId: unknown;
  speakerText: unknown;
  speakerLang: unknown;
  currentGameTypes: unknown;
  settings: unknown;
  isSpecialExercises: unknown;
  isSpeaking: unknown;
}

const initialState: GameInfoState = {
  videoId: null,
  playlistId: null,
  speakerText: null,
  speakerLang: LangList.ru,
  currentGameTypes: [],
  settings: DEFAULT_SETTINGS,
  isSpecialExercises: false,
  isSpeaking: false,
};

const slice = createSlice({
  name: "game/info",
  initialState,
  reducers: {
    getWeatherInfoRequest: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    getWeatherInfoSuccess: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
    }),
    getWeatherInfoError: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
    setSpeakerText: (state, action) => ({
      ...state,
      speakerText: action.payload.text,
      speakerLang: action.payload.lang || LangList.ru,
    }),
    setVideoId: (state, action) => ({
      ...state,
      videoId: action.payload.videoId,
      playlistId: action.payload.playlistId,
    }),
    setGames: (state, action) => ({
      ...state,
      currentGameTypes: action.payload,
    }),
    setSettings: (state, action) => ({
      ...state,
      settings: action.payload,
    }),
    setIsSpecialExercises: (state, action) => ({
      ...state,
      isSpecialExercises: action.payload,
    }),
    setIsSpeaking: (state, action) => ({
      ...state,
      isSpeaking: action.payload,
    }),
  },
});

export const { actions: gameInfoActions } = slice;

export const gameInfoSelector = (state: AppState) => state.game.gameInfoService;

export default slice.reducer;
