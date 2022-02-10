import axios from 'axios';
import React, { useContext, useState } from 'react';

import { LocationContext, UserNameContext } from '../../App';
import { WeatherContext } from '../../App';
import { StyledUl } from './LocationOutput.styled';

const backendUri = 'https://weather-app-homework.herokuapp.com/currentWeather';

const LocationOutput = () => {
  // States
  // - Local

  const [fetchingCurrentWeatherError, setFetchingCurrentWeatherError] =
    useState('');
  const [fetchingDailyWeatherError, setFetchingDailyWeatherError] =
    useState('');

  // Context
  const { fetchedLocations, loading } = useContext(LocationContext);
  const {
    setCurrentWeatherData,
    setLoadingCurrentWeather,
    setDailyWeatherData,
    setLoadingDailyWeather,
  } = useContext(WeatherContext);
  const { user } = useContext(UserNameContext);

  const locationClickHandler = (e) => {
    // FETCHING CURRENT WEATHER
    let optionsCurrent = {
      method: 'GET',
      url: `https://foreca-weather.p.rapidapi.com/current/${e.target.dataset.id}`,
      params: { alt: '0', tempunit: 'C', windunit: 'MS', lang: 'en' },
      headers: {
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': '5ac28fecdfmsha8222312d21313ap11fda7jsn96b308616bea',
      },
    };
    axios
      .request(optionsCurrent)
      .then((res) => {
        let locationData = res.data.current;
        locationData.location = e.target.dataset.location;
        setCurrentWeatherData(locationData);

        // Sending current weather data to backend

        let date = new Date();
        let dataForBackend = {
          user_name: user,
          weather: locationData,
          date: date.toString(),
        };
        axios
          .post(backendUri, dataForBackend, {
            headers: {
              'content-type': 'text/json',
              'Access-Control-Allow-Origin':
                'https://weather-app-homework.herokuapp.com',
            },
          })
          .then((res) => console.log('didly done it'))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        setFetchingCurrentWeatherError(err.response.data);
      })
      .finally(() => {
        setLoadingCurrentWeather(false);
      });

    // FETCHING DAYLY WEATHER
    var optionsDayly = {
      method: 'GET',
      url: `https://foreca-weather.p.rapidapi.com/forecast/daily/${e.target.dataset.id}`,
      params: {
        alt: '0',
        tempunit: 'C',
        windunit: 'MS',
        dataset: 'full',
      },
      headers: {
        'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
        'x-rapidapi-key': '5ac28fecdfmsha8222312d21313ap11fda7jsn96b308616bea',
      },
    };

    axios
      .request(optionsDayly)
      .then((res) => {
        setDailyWeatherData(res.data.forecast);
      })
      .catch((err) => {
        setFetchingDailyWeatherError(err);
      })
      .finally(() => setLoadingDailyWeather(false));
  };

  return (
    <div>
      {!loading && fetchedLocations.length !== 0 ? (
        <StyledUl>
          {fetchedLocations.map((location, index) => (
            <li
              key={index}
              data-id={location.id}
              data-location={location.name}
              onClick={(e) => locationClickHandler(e)}
            >
              <div data-id={location.id} data-location={location.name}>
                {location.country}, {location.name}
              </div>
            </li>
          ))}
        </StyledUl>
      ) : null}
    </div>
  );
};

export default LocationOutput;
