import React, { useState } from 'react';
import { StyledTitle } from './App.styled';
import Form from './components/form/Form';
import LocationOutput from './components/locationOutput/LocationOutput';
import WeatherOutput from './components/weatherOutput/WeatherOutput';

export const LocationContext = React.createContext();
export const WeatherContext = React.createContext();
export const UserNameContext = React.createContext();

function App() {
  // States
  // - Global
  const [fetchedLocations, setFetchedLocations] = useState([]);
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [loadingCurrentWeather, setLoadingCurrentWeather] = useState(true);
  const [dailyWeatherData, setDailyWeatherData] = useState({});
  const [loadingDailyWeather, setLoadingDailyWeather] = useState(true);
  let user = 'WonaBeProgrammer';

  return (
    <>
      <UserNameContext.Provider value={{ user }}>
        <WeatherContext.Provider
          value={{
            currentWeatherData,
            setCurrentWeatherData,
            loadingCurrentWeather,
            setLoadingCurrentWeather,
            dailyWeatherData,
            setDailyWeatherData,
            loadingDailyWeather,
            setLoadingDailyWeather,
          }}
        >
          <LocationContext.Provider
            value={{
              fetchedLocations,
              setFetchedLocations,
              loadingLocation,
              setLoadingLocation,
            }}
          >
            <StyledTitle>
              Weather <span>Forecast</span>
            </StyledTitle>
            {loadingCurrentWeather && <Form />}
            {loadingCurrentWeather && <LocationOutput />}
            {!loadingCurrentWeather && <WeatherOutput />}
          </LocationContext.Provider>
        </WeatherContext.Provider>
      </UserNameContext.Provider>
    </>
  );
}

export default App;
