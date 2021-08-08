import React, { useState, useEffect, useMemo } from "react";
import styled from "@emotion/styled";
import { ReactComponent as DayThunderstorm } from "../../../assets/img/weather-svg/day-thunderstorm.svg";
import { ReactComponent as DayClear } from "../../../assets/img/weather-svg/day-clear.svg";
import { ReactComponent as DayCloudyFog } from "../../../assets/img/weather-svg/day-cloudy-fog.svg";
import { ReactComponent as DayCloudy } from "../../../assets/img/weather-svg/day-cloudy.svg";
import { ReactComponent as DayFog } from "../../../assets/img/weather-svg/day-fog.svg";
import { ReactComponent as DayPartiallyClearWithRain } from "../../../assets/img/weather-svg/day-partially-clear-with-rain.svg";
import { ReactComponent as DaySnowing } from "../../../assets/img/weather-svg/day-snowing.svg";
import { ReactComponent as NightThunderstorm } from "../../../assets/img/weather-svg/night-thunderstorm.svg";
import { ReactComponent as NightClear } from "../../../assets/img/weather-svg/night-clear.svg";
import { ReactComponent as NightCloudyFog } from "../../../assets/img/weather-svg/night-cloudy-fog.svg";
import { ReactComponent as NightCloudy } from "../../../assets/img/weather-svg/night-cloudy.svg";
import { ReactComponent as NightFog } from "../../../assets/img/weather-svg/night-fog.svg";
import { ReactComponent as NightPartiallyClearWithRain } from "../../../assets/img/weather-svg/night-partially-clear-with-rain.svg";
import { ReactComponent as NightSnowing } from "../../../assets/img/weather-svg/night-snowing.svg";

const IconContainer = styled.div`
  flex-basis: 20%;
  svg {
    width: 80px;
    height: 80px;
    @media (max-width: 576px) {
      width: 50px;
    }
  }
`;
const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41], //雷 -day and night
  isClear: [1], //晴天-day and night
  isCloudyFog: [25, 26, 27, 28], //陰天有霧-day and night
  isCloudy: [2, 3, 4, 5, 6, 7], //陰天-day and night
  isFog: [24], //有霧-day and night
  isPartiallyClearWithRain: [
    8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39,
  ], //多雲有雨 -day and night
  isSnowing: [23, 37, 42], //雪-day and night
};
const weatherIcons = {
  day: {
    isThunderstorm: <DayThunderstorm />,
    isClear: <DayClear />,
    isCloudyFog: <DayCloudyFog />,
    isCloudy: <DayCloudy />,
    isFog: <DayFog />,
    isPartiallyClearWithRain: <DayPartiallyClearWithRain />,
    isSnowing: <DaySnowing />,
  },
  night: {
    isThunderstorm: <NightThunderstorm />,
    isClear: <NightClear />,
    isCloudyFog: <NightCloudyFog />,
    isCloudy: <NightCloudy />,
    isFog: <NightFog />,
    isPartiallyClearWithRain: <NightPartiallyClearWithRain />,
    isSnowing: <NightSnowing />,
  },
};
// 使用迴圈來找出該天氣代碼對應到的天氣型態
const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || [];

  return weatherType;
};

const WeatherIcon = ({ currentWeatherCode, moment }) => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState("isClear");
  // STEP 3：透過 useMemo 保存計算結果，記得要在 dependencies 中放入 currentWeatherCode
  const theWeatherIcon = useMemo(
    () => weatherCode2Type(currentWeatherCode),
    [currentWeatherCode]
  );
  // STEP 4：在 useEffect 中去改變 currentWeatherIcon，記得定義 dependencies
  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon);
  }, [theWeatherIcon]);
  return (
    <IconContainer>{weatherIcons[moment][currentWeatherIcon]}</IconContainer>
  );
};

export default WeatherIcon;
