import { combineReducers } from "@reduxjs/toolkit";

import gameInfo from "./gameInfo";

const game = combineReducers({
  gameInfoService: gameInfo,
});

export default game;
