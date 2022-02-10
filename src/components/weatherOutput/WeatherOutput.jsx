import React, { useContext } from 'react';

import { WeatherContext } from '../../App';
import {
  StyledLocation,
  StyledMonthDay,
  StyledPhrase,
  StyledSpanWrap,
  StyledTemp,
  StyledCurrentWeatherOutput,
  StyledCurrentWeatherOutputWrap,
  StyledWeekDay,
  StyledDailyWeatherOutputWrap,
  StyledSingleDayWrap,
  StyledImg,
  StyledWeatherOutputWrap,
} from './WeatherOutput.Styled';

import { weekDayStringify, monthStringify } from './dateSwitches';

const WeatherOutput = () => {
  // State
  // - Global
  // Context
  const {
    currentWeatherData,
    loadingCurrentWeather,
    setLoadingCurrentWeather,
    dailyWeatherData,
    loadingDailyWeather,
    setLoadingDailyWeather,
  } = useContext(WeatherContext);

  // Current weather
  let weekDayString = '';
  let monthString = '';
  let day = '';

  if (currentWeatherData) {
    let date = new Date(currentWeatherData.time);
    let weekDay = date.getDay();
    let month = date.getMonth();

    weekDayString = weekDayStringify(weekDay);
    monthString = monthStringify(month);
    day = date.getDate();
  }

  // Daily weather

  return (
    <>
      <StyledWeatherOutputWrap>
        <StyledCurrentWeatherOutputWrap>
          <button onClick={() => setLoadingCurrentWeather(true)}>Back</button>
          <StyledCurrentWeatherOutput>
            <StyledSpanWrap>
              <StyledWeekDay>{weekDayString}</StyledWeekDay>
              <StyledMonthDay>
                {monthString} {day}
              </StyledMonthDay>
              <StyledLocation>{currentWeatherData.location}</StyledLocation>
            </StyledSpanWrap>
            <StyledSpanWrap>
              <StyledTemp>{currentWeatherData.temperature}&#8451;</StyledTemp>
              <StyledImg
                src={`https://developer.foreca.com/static/images/symbols/${currentWeatherData.symbol}.png`}
                alt='symbol'
              />
              <StyledPhrase>
                {currentWeatherData.symbolPhrase.charAt(0).toUpperCase()}
                {currentWeatherData.symbolPhrase.slice(1)}
              </StyledPhrase>
            </StyledSpanWrap>
          </StyledCurrentWeatherOutput>
        </StyledCurrentWeatherOutputWrap>
        <StyledDailyWeatherOutputWrap>
          {!loadingDailyWeather
            ? dailyWeatherData.map((item, index) => (
                <StyledSingleDayWrap key={index}>
                  <span>{item.date.slice(5, 10)}</span>
                  <StyledImg
                    src={`https://developer.foreca.com/static/images/symbols/${item.symbol}.png`}
                    alt='symbol'
                  />
                  <span>
                    min {item.minTemp}&#176; max {item.maxTemp}&#176;
                  </span>
                </StyledSingleDayWrap>
              ))
            : null}
        </StyledDailyWeatherOutputWrap>
      </StyledWeatherOutputWrap>
    </>
  );
};

export default WeatherOutput;
