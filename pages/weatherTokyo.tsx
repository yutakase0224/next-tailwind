import axios from "axios";

import React, { useEffect, useState } from "react";

const WEATHER_LIST_URL =
  "https://weather.tsukumijima.net/api/forecast/city/130010";

const WeatherList = () => {
  const [weatherList, setWeatherList] = useState<any>();

  useEffect(() => {
    axios
      .get(WEATHER_LIST_URL)
      .then((res) => {
        console.log(res.data);
        setWeatherList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {weatherList && <p>場所：{weatherList.title}</p>}
      {weatherList && <p>日付：{weatherList.forecasts[1].date}</p>}
      {weatherList && <p>天気：{weatherList.forecasts[1].telop}</p>}
      {weatherList && (
        <p>詳しい天気：{weatherList.forecasts[1].detail.weather}</p>
      )}
      {weatherList && (
        <p>最高気温：{weatherList.forecasts[1].temperature.min.celsius}</p>
      )}
      {weatherList && (
        <p>最低気温：{weatherList.forecasts[1].temperature.max.celsius}</p>
      )}
    </div>
  );
};

export default WeatherList;
