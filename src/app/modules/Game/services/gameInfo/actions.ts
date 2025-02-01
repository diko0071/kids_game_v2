import { AppThunk } from "services/store";

import { apiGetWeatherInfo } from "./api";
import { gameInfoActions } from "./index";
import { WeatherInfoInterface } from "./interface";

export const getWeatherInfo =
  (lat: string, lon: string): AppThunk =>
  async (dispatch: any) => {
    try {
      dispatch(gameInfoActions.getWeatherInfoRequest());

      const { data }: WeatherInfoInterface | any = await apiGetWeatherInfo(
        lat,
        lon
      );

      dispatch(gameInfoActions.getWeatherInfoSuccess(data));
    } catch (error) {
      dispatch(gameInfoActions.getWeatherInfoError(error));
      console.error(error);
    }
  };
