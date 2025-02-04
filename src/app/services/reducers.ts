import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import app from "services/app";
import game from "../modules/Game/services";

const combinedReducer = combineReducers({
  appService: app,
  game,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }

  return combinedReducer(state, action);
};

export default rootReducer;
