import axios from 'axios';
import React, { useContext, useState } from 'react';
import {
  StyledErrMessage,
  StyledForm,
  StyledSearch,
  StyledSubmit,
} from './Form.styled';

import { LocationContext } from '../../App';
import { UserNameContext } from '../../App';

const backendUri = 'https://weather-app-homework.herokuapp.com/location';

const Form = () => {
  // States
  // - Local
  const [searchText, setSearchText] = useState('');
  const [searchErrMessage, setSearchErrMessage] = useState('');
  const [locationErrMessage, setLocationErrMessage] = useState('');

  // Context
  const { setFetchedLocations, loadingLocation, setLoadingLocation } =
    useContext(LocationContext);
  const { user } = useContext(UserNameContext);

  let options = {
    method: 'GET',
    url: `https://foreca-weather.p.rapidapi.com/location/search/${searchText}`,
    // params: { lang: 'en', country: 'in' },
    headers: {
      'x-rapidapi-host': 'foreca-weather.p.rapidapi.com',
      'x-rapidapi-key': '5ac28fecdfmsha8222312d21313ap11fda7jsn96b308616bea',
    },
  };

  const validation = (value) => {
    setSearchText(value);
    //Validation to the input field
    if (!/^[A-Za-z\s]*$/.test(value)) {
      return setSearchErrMessage('Only letters and spaces alowed');
    } else if (value.length > 30) {
      return setSearchErrMessage('Max 30 symbols');
    } else {
      return setSearchErrMessage('');
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const dataForBackend = {
      user_name: user,
      searchedLocation: searchText,
    };

    axios
      .request(options)
      .then((res) => {
        setFetchedLocations(res.data.locations.slice(0, 5));
        setLocationErrMessage('');
      })
      .catch((err) => {
        setLocationErrMessage(err.response.data);
      })
      .finally(() => setLoadingLocation(false));

    axios
      .post(backendUri, dataForBackend)
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
  };

  return (
    <StyledForm onSubmit={(e) => formSubmitHandler(e)}>
      <StyledSearch
        type='text'
        onChange={(e) => validation(e.target.value)}
        value={searchText}
      />
      {searchErrMessage ? (
        <StyledErrMessage>{searchErrMessage}</StyledErrMessage>
      ) : null}
      <StyledSubmit type='submit' value='Search' />
      {!loadingLocation && locationErrMessage ? (
        <StyledErrMessage>
          {locationErrMessage.substring(
            locationErrMessage.lastIndexOf('<h1>') + 4,
            locationErrMessage.lastIndexOf('</h1>')
          )}
        </StyledErrMessage>
      ) : null}
    </StyledForm>
  );
};

export default Form;

// We experiencing trouble connecting to page
